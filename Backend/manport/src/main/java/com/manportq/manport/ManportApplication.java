package com.manportq.manport;

import com.manportq.manport.DTO.ApplicationDTO;
import com.manportq.manport.DTO.CountryDTO;
import com.manportq.manport.DTO.ProdDTO;
import com.manportq.manport.Model.*;
import com.manportq.manport.Model.types.*;
import com.manportq.manport.Repository.*;
import com.manportq.manport.Servies.CountryService;
import com.manportq.manport.Servies.ProdService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Date;
import java.util.Optional;

@RequiredArgsConstructor
@SpringBootApplication
public class ManportApplication implements CommandLineRunner
{
	private final ProdRepository prodRepository;
	private final JobRepository jobRepository;
	private final CountryRepository countryRepository;
	private final CountryService countryService;
	private final PlantRepository plantRepository;
	private final IssueRepository issueRepository;
	private final ApplicationRepository applicationRepository;
	private final ProdService prodService;
	private final SectionRepository sectionRepository;

	public static void main(String[] args) {
		SpringApplication.run(ManportApplication.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception
	{
		System.out.println("[info] ManPort app is running");

		/* Applications */
		Plant tr = plantRepository.save(new Plant("TURKEY", "TR", "Toyota Turkey"));
		Plant fr = plantRepository.save(new Plant("ENGLAND", "EN", "Toyota England"));
		Plant en = plantRepository.save(new Plant("FRANCE", "FR", "Toyota France"));
		Plant it = plantRepository.save(new Plant("ITALY", "IT", "Toyota Italy"));

		Application facebook = applicationRepository.save(
				new Application.Builder()
						.fullName("Facebook")
						.shortCode("FB")
						.businessArea(BusinessArea.MANUFACTURING)
						.releaseDate(new Date())
						.lineCountOfBackend(">75k")
						.lineCountOfFrontend(">75k")
						.database(DatabaseTypes.Oracle)
						.isStopProduction(true)
						.responsible("Ömer Halil Demirtaş")
						.backend(BackEndTypes.SpringBoot)
						.isTracking(true)
						.frontEnd(FrontEndTypes.ReactJs)
						.responsibleTeam(ResponsibleTeamTypes.Manufacturing_Systems)
						.build()
		);
		Application twitter = applicationRepository.save(
				new Application.Builder()
				.fullName("Twitter")
				.shortCode("TW")
				.businessArea(BusinessArea.Quality)
				.releaseDate(new Date())
				.lineCountOfBackend(">75k")
				.lineCountOfFrontend(">75k")
				.database(DatabaseTypes.Oracle)
				.isStopProduction(false)
				.responsible("Emir Demirtaş")
				.backend(BackEndTypes.Spring)
				.frontEnd(FrontEndTypes.Other)
				.isTracking(true)
				.responsibleTeam(ResponsibleTeamTypes.EMC_Quality)
				.build()
		);

		Country f1 = countryRepository.save(new Country(true, true, tr.getId(), facebook));
		Country f2 = countryRepository.save(new Country(true, true, fr.getId(), facebook));
		Country f3 = countryRepository.save(new Country(true, true, en.getId(), facebook));
		Country f4 = countryRepository.save(new Country(true, true, it.getId(), facebook));

		Country t1 = countryRepository.save(new Country(true, true, tr.getId(), twitter));
		Country t2 = countryRepository.save(new Country(true, true, fr.getId(), twitter));
		Country t3 = countryRepository.save(new Country(true, true, en.getId(), twitter));


		Prod prod1 = prodRepository.save(new Prod("Prod1", f1));
		Prod prod2 = prodRepository.save(new Prod("Prod2", f1));
		Prod prod3 = prodRepository.save(new Prod("Prod1", f2));
		Prod prod4 = prodRepository.save(new Prod("Prod1", f3));

		Prod prod5 = prodRepository.save(new Prod("Prod1", t1));
		Prod prod6 = prodRepository.save(new Prod("Prod2", t1));


		Job job1 = jobRepository.save(new Job(ErrorType.LOW, "Job1", prod1));
		Job job2 = jobRepository.save(new Job(ErrorType.HIGH, "Job2", prod1));
			Job job3 = jobRepository.save(new Job(ErrorType.MEDIUM, "Job3", prod1));
		Job job7= jobRepository.save(new Job(ErrorType.MEDIUM, "Job4", prod1));
		Job job8 = jobRepository.save(new Job(ErrorType.MEDIUM, "Job1", prod1));

		Job job4 = jobRepository.save(new Job(ErrorType.NONE, "Job1", prod2));
		Job job5 = jobRepository.save(new Job(ErrorType.MEDIUM, "Job2", prod2));
		Job job6 = jobRepository.save(new Job(ErrorType.LOW, "Job3", prod2));

		/* Issues */
		issueRepository.save(new Issue(facebook.getId(), f1.getId(), prod1.getId(), job1.getId(), "Fotoğraf beğenirken oluşan hatalr için", ErrorType.LOW));

		/* App Tests */

		Long appId = 6L;
		Optional<Application> appDB = applicationRepository.findById(appId);

		CountryDTO c = countryService.save(new CountryDTO(null, false, false, 123L, new ArrayList<>()), appDB.get());

		// ok
		//countryService.delete(c.getId());

		ProdDTO prod = prodService.save(new ProdDTO(null, "prod-deneme", new ArrayList<>()), c);

		Optional<Prod> p1 = prodRepository.findById(prod.getId());

		//	prodRepository.deleteById(p1.get().getId());

		// not ok -> boş entity de çalışıyor sadece
		countryService.delete(c.getId());

		/*
			Prodslar el ile mi eklenecek yoksa otamatik bir yolla mı eklenecek

	 	*/

		/*
			Sections
	 	*/
		Section s1 = new Section();
		s1.setTitle("Facebook");

		Section s2 = new Section();
		s2.setTitle("Production");

		Section s3 = new Section();
		s3.setTitle("Turkey");

		Section s4 = new Section();
		s4.setTitle("France");

		s1.getSubSections().add(s2);
		s1.getSubSections().add(s3);
		//s1.getSubSections().add(s4);

		sectionRepository.save(s1);
		//sectionRepository.save(s2);
		//sectionRepository.save(s3);
		//sectionRepository.save(s4);
	}
}
