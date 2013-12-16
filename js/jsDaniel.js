$(document).ready(function(){
	
	$("#content_index_wrapper").on('mouseover','.index_item_not_highlighted', function(){
		$(this).switchClass("index_item_not_highlighted","index_item_highlighted",10);
	});
	
	$("#content_index_wrapper").on('mouseout','.index_item_highlighted', function(){
		$(this).switchClass("index_item_highlighted","index_item_not_highlighted",600);
	});
	
	
	//HOME
	$(".go_home").click( function(){
		var newHTML = '';
		newHTML += '<div id="content_wrapper">';
		newHTML += '<p><img src="img/happy_cookie_hi.png" title="Please read our cookies policy." alt="cookie image"></p>';
		newHTML += '<br/>';
		newHTML += '<div class="home_text1">Hey, hi ! Welcome to my page !</div>';
		newHTML += '</div>';
		
		replaceAndScrollUp('content_wrapper',newHTML);
	});
	
	//BIO
	$("#index_bio").click( function(){
		var newHTML = '';
		newHTML += '<div id="content_wrapper">';
		newHTML += '<p><h1><u>Short Bio</u></h1></p>';
		newHTML += '<br/>\
			<div class="bio_text">I&apos;m a grad student at Carnegie Mellon University. I&apos;m currently on the first semester of the MIIS (MSc in Intelligent Information Systems) Program offered by LTI - School of Computer Science.</div><br/><br/>\
			<div class="bio_text">My interests include recommender systems, knowledge extraction and machine learning applied to real-life problems.</div>\
			<br/><br/>\
			<div class="bio_text">My advisor is <a href="http://www.cs.cmu.edu/~hovy/">Prof. Eduard Hovy</a> and we are currently working on a data and text mining project for law enforcement.</div>\
			<br/><br/>\
			<div class="bio_text">Current courses I am taking include <i>Machine Learning</i>, <i>Search Engines & Web Mining</i>, and <i>Algorithms for NLP.</i> </div>';
		
		newHTML += '<br><hr/><br>';
		
		newHTML += '<p><h1><u>Education</u></h1></p><br>';
		
		
		newHTML += '<div id="cmu" class="education_block">\
			<div class="education_text_block">\
				<span class="education_block_title"><a href="http://www.cmu.edu" target="_blank">Carnegie Mellon University</a></span> <br><br>\
				<div class="education_block_content">\
					MSc. Intelligent Information Systems (MIIS) <br>\
				</div>\
			</div>\
		</div>';
			
		newHTML += '<br><br><br>';
		
		newHTML += '<div id="polytechnique" class="education_block">\
			<div class="education_text_block">\
				<span class="education_block_title"><a href="http://www.polytechnique.edu" target="_blank">Ecole Polytechnique</a></span> <br><br>\
				<div class="education_block_content">\
					B. Eng. Applied Mathematics &amp; Computer Science <br>\
					MSc. Computer Vision &amp; Statistical Learning <br>\
				</div>\
			</div>\
		</div>';
			
		newHTML += '<br><br><br>';
		
		newHTML += '<div id="ita" class="education_block">\
			<div class="education_text_block">\
				<span class="education_block_title"><a href="http://www.ita.br" target="_blank">Instituto Tecnol&oacute;gico de Aeron&aacute;utica</a></span> <br><br>\
				<div class="education_block_content">\
					B. Eng. Mechanical Aeronautical Engineering <br>\
					Honorable Mention in Mathematics, Physics and Humanities.\
				</div>\
			</div>\
		</div>';
		
		newHTML += '</div>';
		
		replaceAndScrollUp('content_wrapper',newHTML);
	});
	
	//SKILLS
	$("#index_skills").click( function(){
		var newHTML = '';
		newHTML += '<div id="content_wrapper">';
		newHTML += '<p><h1><u>Fluent Languages</u></h1></p>';
		newHTML += '<div class="skill_line"><div id="skill_image_pt" class="skill_info">portuguese</div></div>';
		newHTML += '<div class="skill_line"><div id="skill_image_en" class="skill_info">english</div></div>';
		newHTML += '<div class="skill_line"><div id="skill_image_sp" class="skill_info">spanish</div></div>';
		newHTML += '<div class="skill_line"><div id="skill_image_fr" class="skill_info">french</div></div>';
		newHTML += '<div class="skill_line"><div id="skill_image_ge" class="skill_info">german</div></div>';
		newHTML += '<br/><br/><p><h1><u>Computer Skills</u></h1></p>';
		newHTML += '<p>Java, C++, C#, PHP, JavaScript, MySQL, SCOPE, Matlab, VBA, HTML, CSS</p>';
		
		newHTML += '</div>';
		
		replaceAndScrollUp('content_wrapper',newHTML);
	});
	
	//PROJECTS
	$("#index_projects").click( function(){
		var newHTML = '';
		newHTML += '<div id="content_wrapper">';
		newHTML += '<div id="projects_wrapper">\
			<div class="projects_row_wrapper">\
				<div class="projects_image" style="background-image: url(img/project_5.png)"></div>\
				<div class="projects_info_wrapper">\
						<div class="projects_info_title"><a href="http://www.codebarflash.fr/home.php" target="_blank">Code Bar</a></div>\
						<div class="projects_info_text">Start-up in Paris (France) that offers multi-platform web application service for restaurants. Co-founder and responsible for product development.<br/><br/><i>&rarr;  PHP/JQuery/AJAX/MySQL</i></div>\
				</div>\
			</div>\
			<div class="projects_row_wrapper">\
				<div class="projects_info_wrapper">\
						<div class="projects_info_title">Aesthetic Assessment of Photos</div>\
						<div class="projects_info_text">Construction of image descriptor and supervised learning pipeline for assessing the aesthetic quality of photographs.<br/><br/><i>&rarr;  C++/OpenCV</i></div>\
				</div>\
				<div class="projects_image"style="background-image: url(img/project_6.png)"></div>\
			</div>\
			<div class="projects_row_wrapper">\
				<div class="projects_image" style="background-image: url(img/project_3.png)"></div>\
				<div class="projects_info_wrapper">\
						<div class="projects_info_title">3D Reconstruction by Stereo Vision</div>\
						<div class="projects_info_text">Image rectification and object 3D reconstruction based on stereo vision algorithms.<br/><br/><br/><i>&rarr;   C++/OpenCV/MeshLab</i></div>\
				</div>\
			</div>\
			<div class="projects_row_wrapper">\
				<div class="projects_info_wrapper">\
						<div class="projects_info_title">HashLife - Conway&apos;s Game of Life</div>\
						<div class="projects_info_text">Algorithm that uses hashing and dynamic programming for fast execution of large cellular automata.<br/><br/><i>&rarr;  Java</i></div>\
				</div>\
				<div class="projects_image"style="background-image: url(img/project_4.gif)"></div>\
			</div>\
			<div class="projects_row_wrapper">\
				<div class="projects_image"style="background-image: url(img/project_2.png)"></div>\
				<div class="projects_info_wrapper">\
						<div class="projects_info_title">Heat Kernel Signature</div>\
						<div class="projects_info_text">Identification and representation of a point on a shape based on heat diffusion dynamics. Reference: <i><a href="http://www.lix.polytechnique.fr/~maks/papers/hks.pdf" target="_blank">Sun, J., Ovsjanikov, M., & Guibas, L. (2009, July)</a></i><br/><br/><i>&rarr;  Java</i></div>\
				</div>\
			</div>\
			<div class="projects_row_wrapper">\
				<div class="projects_info_wrapper">\
						<div class="projects_info_title">Mesh Simplification - Quadric Error Metric</div>\
						<div class="projects_info_text">Algorithm for mesh simplification based minimization of the approximate surface error. Reference: <a href="http://www1.cs.columbia.edu/~cs4162/html05s/garland97.pdf" target="_blank"><i>Garland, M., & Heckbert, P. S. (1997, August).</i></a><br/><br/><i>&rarr;  Java &amp; C++/OpenGL</i>  </div>\
				</div>\
				<div class="projects_image" style="background-image: url(img/project_1.png)"></div>\
			</div>\
			<div class="projects_row_wrapper">\
				<div class="projects_image"style="background-image: url(img/project_7.png)"></div>\
				<div class="projects_info_wrapper">\
						<div class="projects_info_title">Object Detection with Graph Cut</div>\
						<div class="projects_info_text">Min-Cut/Max-Flow algorithm for object detection through energy minimization. Reference: <i><a href="http://www.csd.uwo.ca/~yuri/Papers/pami04.pdf" target="_blank">Boykov, Y., &amp; Kolmogorov, V. (2004)</a></i><br/><br/><i>&rarr;  C++/OpenCV</i></div>\
				</div>\
			</div>\
			';
		newHTML += '</div>';
		newHTML += '</div>';
		
		replaceAndScrollUp('content_wrapper',newHTML);
	});
	
	//EXPERIENCE
	$("#index_experience").click( function(){
		var newHTML = '';
		newHTML += '<div id="content_wrapper">';
		newHTML += '<div id="experience_wrapper">';
		newHTML += '<div class="experience_category">Professional Experience</div>\
			<a href="http://www.microsoft.com" target="_blank"><div class="experience_row_wrapper">\
				<div class="experience_image" style="background-image: url(img/microsoft.png)"></div>\
				<div class="experience_info_wrapper">\
						<div class="experience_info_title_wrapper">\
							<div class="experience_company_name">Microsoft</div>\
							<div class="experience_country">Paris, France</div>\
							<div class="experience_country_flag" style="background-image: url(img/france.png)"></div>\
						</div>\
						<div class="experience_info_text">Research and Development of a collaborative filtering recommender system for Xbox Music.\
							<br/><i class="experience_keywords">Keywords: Collaborative Filtering, Matrix Factorization, SVD, Latent Feature Model, Association Rules, Graph Clustering, MapReduce.</i>\
						</div>\
						<div class="experience_info_bottom_wrapper">\
							<div class="experience_tools">&rarr;  C#, SCOPE, Cosmos</div>\
							<div class="experience_date">4 months in 2013</div>\
						</div>\
				</div>\
			</a></div>\
			<a href="http://www.capgemini.com" target="_blank"><div class="experience_row_wrapper">\
				<div class="experience_image" style="background-image: url(img/capgemini.png)"></div>\
				<div class="experience_info_wrapper">\
						<div class="experience_info_title_wrapper">\
							<div class="experience_company_name">Capgemini Consulting</div>\
							<div class="experience_country">Shanghai, China</div>\
							<div class="experience_country_flag" style="background-image: url(img/china.png)"></div>\
						</div>\
						<div class="experience_info_text">Development of strategic data mining methodology for a major Chinese insurance company.\
							<br/><i class="experience_keywords">Keywords: Data Mining, Business Intelligence.</i>\
						</div>\
						<div class="experience_info_bottom_wrapper">\
							<div class="experience_tools">&rarr;  PL/SQL, SPAD, VBA</div>\
							<div class="experience_date">8 weeks in 2012</div>\
						</div>\
				</div>\
			</a></div>\
			<a href="http://www.rolandberger.com" target="_blank"><div class="experience_row_wrapper">\
				<div class="experience_image" style="background-image: url(img/rolandberger.png)"></div>\
				<div class="experience_info_wrapper">\
						<div class="experience_info_title_wrapper">\
							<div class="experience_company_name">Roland Berger</div>\
							<div class="experience_country">Sao Paulo, Brazil</div>\
							<div class="experience_country_flag" style="background-image: url(img/brazil.png)"></div>\
						</div>\
						<div class="experience_info_text">Support to projects in areas such as energy and financial services. Developed set of scripts that spared hundreds of consultant-hours.\
							<br/><i class="experience_keywords">Keywords: Strategy Consulting, Market Analysis.</i>\
						</div>\
						<div class="experience_info_bottom_wrapper">\
							<div class="experience_tools">&rarr;  Excel, VBA</div>\
							<div class="experience_date">2 weeks in 2010</div>\
						</div>\
				</div>\
			</a></div>\
			<a href="http://www.rbcapital.com" target="_blank"><div class="experience_row_wrapper">\
				<div class="experience_image" style="background-image: url(img/rbcapital.png)"></div>\
				<div class="experience_info_wrapper">\
						<div class="experience_info_title_wrapper">\
							<div class="experience_company_name">RB Capital</div>\
							<div class="experience_country">Sao Paulo, Brazil</div>\
							<div class="experience_country_flag" style="background-image: url(img/brazil.png)"></div>\
						</div>\
						<div class="experience_info_text">Pricing of security products. Improved and automatized methodology for the profitability calculation of several funds.<br/><i class="experience_keywords">Keywords: Securities, Pricing.</i>\
						</div>\
						<div class="experience_info_bottom_wrapper">\
							<div class="experience_tools">&rarr;  Excel, VBA</div>\
							<div class="experience_date">3 months in 2009</div>\
						</div>\
				</div>\
			</a></div>\
			<br/><br/><br/>\
			<div class="experience_category">Volunteering Experience</div>\
			<a href="http://www.casdvest.org.br" target="_blank"><div class="experience_row_wrapper">\
				<div class="experience_image" style="background-image: url(img/casdvest.png)"></div>\
				<div class="experience_info_wrapper">\
						<div class="experience_info_title_wrapper">\
							<div class="experience_company_name">Casd Vestibulares</div>\
							<div class="experience_country">SJCampos, Brazil</div>\
							<div class="experience_country_flag" style="background-image: url(img/brazil.png)"></div>\
						</div>\
						<div class="experience_info_text">NGO prep course for college admission tests with over 500 students from the city&apos;s poor community.<br/><b><u>MKT Director</u></b> - Created NGO&apos;s current MKT structure, with the elaboration of several projects, publicity material and donation platforms and funds.</i>\
						</div>\
						<div class="experience_info_bottom_wrapper">\
							<div class="experience_date">1 year (2010)</div>\
						</div>\
				</div>\
			</a></div>\
			<a href="http://www.casdvest.org.br" target="_blank"><div class="experience_row_wrapper">\
				<div class="experience_image" style="background-image: url(img/casdvest.png)"></div>\
				<div class="experience_info_wrapper">\
						<div class="experience_info_title_wrapper">\
							<div class="experience_company_name">Casd Vestibulares</div>\
							<div class="experience_country">SJCampos, Brazil</div>\
							<div class="experience_country_flag" style="background-image: url(img/brazil.png)"></div>\
						</div>\
						<div class="experience_info_text"><b><u>Mathematics Teacher</u></b> - Taught mathematics at CASD Vestibulares for classes with over 120 students.</i>\
						</div>\
						<div class="experience_info_bottom_wrapper">\
							<div class="experience_date">2 years, from 2009 to 2010</div>\
						</div>\
				</div>\
			</a></div>\
		';
		newHTML += '</div>';
		newHTML += '</div>';
		
		replaceAndScrollUp('content_wrapper',newHTML);
	});
	
	//CONTACT
	$("#index_contact").click( function(){
		var newHTML = '';
		newHTML += '<div id="content_wrapper">';
		//newHTML += '<p><h1>Contact Info  </h1></p>';
		newHTML += '<p><img src="img/contact_profile.png"/></p>';
		newHTML += '<div class="contact_line"><a href="http://www.linkedin.com/in/danielribeirosilva" target="_blank"><div id="contact_image_linkedin" class="contact_info_linkedin">Linkedin</div></a></div>';
		newHTML += '<div class="contact_line"><div id="contact_image_phone" class="contact_info_phone">phone: (412) 608-3053</div></div>';
		newHTML += '<div class="contact_line"><div id="contact_image_email" class="contact_info_email">email: drsilva AT cs.cmu.edu</div></div>';
		newHTML += '</div>';
		
		replaceAndScrollUp('content_wrapper',newHTML);
	});
	
	//ETC
	$("#index_etc").click( function(){
		var newHTML = '';
		newHTML += '<div id="content_wrapper">';
		newHTML += '<p><img src="img/sad_cookie.png" title="Please read our cookies policy." alt="cookie image"></p>';
		newHTML += '<br/>';
		newHTML += '<div class="home_text1">Sorry, this content is not yet available.<br/><br/>Have a cookie while you wait...</div>';
		newHTML += '</div>';

		replaceAndScrollUp('content_wrapper',newHTML);

	});
	
	
	function replaceAndScrollUp(divId, content){
		$('#'+divId).fadeOut(400, function(){
		   var div = $(content).hide();
		   $(this).replaceWith(div);
		   $('#'+divId).fadeIn(400);
		});
		$("html, body").animate({ scrollTop: 0 }, "slow");
	}
	
	
});