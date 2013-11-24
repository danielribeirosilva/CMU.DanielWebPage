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
		newHTML += '<br/><br/>\
			<div class="bio_text">I&apos;m a grad student at Carnegie Mellon University. I&apos;m currently on the first semester of the MIIS (MSc in Intelligent Information Systems) Program offered by LTI - School of Computer Science.</div><br/><br/>\
			<div class="bio_text">My interests include recommender systems (especially collaborative filtering) and machine learning applied to real-life problems.</div>\
			<br/><br/>\
			<div class="bio_text">My advisor is <a href="http://www.cs.cmu.edu/~hovy/">Prof. Eduard Hovy</a> and we are currently working on a data and text mining project for law enforcement.</div>';
		newHTML += '</div>';
		
		replaceAndScrollUp('content_wrapper',newHTML);
	});
	
	//PROJECTS
	$("#index_projects").click( function(){
		var newHTML = '';
		newHTML += '<div id="content_wrapper">';
		newHTML += '\
			<div class="projects_row_wrapper">\
				<div class="projects_image" style="background-image: url(img/project_5.png)"></div>\
				<div class="projects_info_wrapper">\
						<div class="projects_info_title">Code Bar</div>\
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
						<div class="projects_info_text">Algorithm that uses hashing and dynamic programming for fast execution of large cellular automata.<br/><br/><br/><i>&rarr;  Java</i></div>\
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
			';
		newHTML += '</div>';
		
		replaceAndScrollUp('content_wrapper',newHTML);
	});
	
	//EXPERIENCE
	$("#index_experience").click( function(){
		var newHTML = '';
		newHTML += '<div id="content_wrapper">';
		newHTML += '<div class="experience_category">Professional Experience</div>\
			<a href="http://www.microsoft.com" target="_blank"><div class="experience_row_wrapper">\
				<div class="experience_image" style="background-image: url(img/microsoft.png)"></div>\
				<div class="experience_info_wrapper">\
						<div class="experience_info_title_wrapper">\
							<div class="experience_company_name">Microsoft</div>\
							<div class="experience_country">Paris, France</div>\
							<div class="experience_country_flag" style="background-image: url(img/france.png)"></div>\
						</div>\
						<div class="experience_info_text">Research and Development of a collaborative filtering recommender system for music.\
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
						<div class="experience_info_text">Support to projects in areas such as energy and financial services. Developed set of scripts that spared hundreds of consultant-hours (truth be told: I just wanted to avoid doing a boring task for days).\
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
		
		replaceAndScrollUp('content_wrapper',newHTML);
	});
	
	//CONTACT
	$("#index_contact").click( function(){
		var newHTML = '';
		newHTML += '<div id="content_wrapper">';
		newHTML += '<p>drsilva AT cs.cmu.edu</p>';
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