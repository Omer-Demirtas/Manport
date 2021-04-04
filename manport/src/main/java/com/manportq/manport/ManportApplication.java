package com.manportq.manport;

import com.manportq.manport.Model.*;
import com.manportq.manport.Model.types.BusinessArea;
import com.manportq.manport.Model.types.ErrorType;
import com.manportq.manport.Repository.*;
import com.manportq.manport.Servies.ApplicationService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ManportApplication implements CommandLineRunner
{
	private final ApplicationService applicationService;
	private final ProdRepository prodRepository;
	private final JobRepository jobRepository;
	private final CountryRepository countryRepository;
	private final PlantRepository plantRepository;
	private final IssueRepository issueRepository;

	public ManportApplication(ApplicationService applicationService, ProdRepository prodRepository, JobRepository jobRepository, CountryRepository countryRepository, PlantRepository plantRepository, IssueRepository issueRepository) {
		this.applicationService = applicationService;
		this.prodRepository = prodRepository;
		this.jobRepository = jobRepository;
		this.countryRepository = countryRepository;
		this.plantRepository = plantRepository;
		this.issueRepository = issueRepository;
	}

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

		Application facebook = applicationService.save(new Application("Facebook", true, BusinessArea.MANUFACTURING));
		Application twitter = applicationService.save(new Application("Twitter", false, BusinessArea.Other));

		Country f1 = countryRepository.save(new Country(true, true, tr.getId(), facebook));
		Country f2 = countryRepository.save(new Country(true, true, fr.getId(), facebook));
		Country f3 = countryRepository.save(new Country(true, true, en.getId(), facebook));

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


	}
}
