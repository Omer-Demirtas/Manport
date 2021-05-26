package com.manportq.manport.Servies.Impl;

import com.manportq.manport.DTO.ApplicationDTO;
import com.manportq.manport.Model.Application;
import com.manportq.manport.Model.Messages.WsMessage;
import com.manportq.manport.Model.types.MessageTypes;
import com.manportq.manport.Repository.ApplicationRepository;
import com.manportq.manport.Servies.ApplicationService;
import lombok.RequiredArgsConstructor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class ApplicationServiceImpl implements ApplicationService
{
    private final ApplicationRepository applicationRepository;
    private final SimpMessagingTemplate messagingTemplate;

    @Override
    public List<ApplicationDTO> getAllApps() {
        List<ApplicationDTO> dtoList = new ArrayList<>();

        applicationRepository.findByIsDeleted(false).forEach(application -> dtoList.add(application.convertDIO()));

        return dtoList;
    }

    @Override
    public ApplicationDTO getById(Long id) {
        // Exception should be add
        Optional<Application> app = applicationRepository.findById(id);

        if (app.isPresent())
        {
            return app.get().convertDIO();
        }

        return new ApplicationDTO();
    }

    @Override
    public ApplicationDTO save(ApplicationDTO application) {
        Application app = application.convertApp();
        app.setReleaseDate(new Date());
        app.setCreatedBy(1L);

        ApplicationDTO appDB = applicationRepository.save(app).convertDIO();
        messagingTemplate.convertAndSend("/topic/app/", new WsMessage(MessageTypes.CREATE_APP, appDB));
        return appDB;
    }

        @Override
        public Boolean deleteById(Long id) {
            Optional<Application> app = applicationRepository.findById(id);

            if (app.isPresent())
            {
                Application appDB = app.get();
                appDB.setIsDeleted(true);
                applicationRepository.save(appDB);
                messagingTemplate.convertAndSend("/topic/app/", new WsMessage(MessageTypes.DELETE_APP, appDB.convertDIO()));
                return true;
            }

            return false;
        }

    @Async
    public void asyncMethodWithVoidReturnType() {
        System.out.println("Execute method asynchronously. "
                + Thread.currentThread().getName());
    }

    @Override
    public ApplicationDTO update(ApplicationDTO application)
    {
        Optional<Application> app = applicationRepository.findById(application.getId());

        if(app.isPresent())
        {
            Application appDB = app.get();
            appDB.updateWithDTO(application);

            ApplicationDTO appDTO = applicationRepository.save(appDB).convertDIO();
            messagingTemplate.convertAndSend("/topic/app/", new WsMessage(MessageTypes.UPDATE_APP, appDTO));

            return  appDTO;
        }

        return null;
    }


}
