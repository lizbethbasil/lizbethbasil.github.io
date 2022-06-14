<?php include('contact.php') ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="image/fish-icon.ico" type="image/ico">
        <title>Analysis of Fish Quality Parameters</title>
        <link href="css/style.css" rel="stylesheet" />
        <link href="css/bootstrap.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="css/font-awesome.min.css">
    </head>
    <body>
        <div class="container">
            <header class="text-center py-1"><img src="image/banner.png" class="img-fluid" alt="banner" /></header>   
            
            <nav class="navbar navbar-expand-md justify-content-center p-0 text-uppercase mt-4">
                <ul class="navbar-nav p-0 m-0 text-center">
                    <li class="nav-item px-4 bg-primary bg-gradient border-end border-bottom border-5 border-white">
                        <a class="nav-link text-white" href='index.php'>home</a>
                    </li>
                    <li class="nav-item px-4 bg-primary bg-gradient border-end border-bottom border-5 border-white">
                        <a class="nav-link text-white" href='analysis.html'>quality analysis</a>
                    </li>
                    <li class="nav-item px-4 bg-primary bg-gradient border-end border-bottom border-5 border-white">
                        <a class="nav-link text-white" href='contact-us.php'>contact</a>
                    </li>
                </ul>
            </nav>

            <section id="cForm" class="row bg-light mx-5 px-5 pb-5 align-center">
                <article class="col-md-6 ps-4">
                    <h6 class="mt-4 mb-3">Contact Us</h6>
                    <p>ICAR - Central Institute of Fisheries Technology <br />
                        <i class="fa fa-map-marker pt-2 pe-2" aria-hidden="true"></i>
                        Willingdon Island, Matsyapuri P O, <br />
                        <span class="ps-4">Cochin, Kerala</span> <br />
                        <i class="fa fa-phone pt-2 pe-2" aria-hidden="true"></i>
                        Tel : +(91) 484 2412300 <br />
                        <span class="ps-4">Fax : +(91) 484 2668212</span> <br />
                        <i class="fa fa-envelope pt-2 pe-2" aria-hidden="true"></i>
                        <a class="text-decoration-none" href="mailto:aris.cift@gmail.com">aris.cift@gmail.com</a>
                    </p>                   
                    <br/>
                  	<h6 class="mb-3">Mail Us</h4>              
                   	<form id="contact-us" action="#" method="post">
                       	<input class="mb-2" type="text" name="txtName" placeholder="Name" required><br />
                       	<input class="mb-2" type="email" name="txtEmail" placeholder="Email" required><br />
                       	<textarea name="txtMessage" placeholder="Message..." required></textarea><br />
                       	<input class="btn btn-sm btn-primary" type="submit" value="Submit">
                       	<p class="fs-6 pt-2"><?php include('message.php') ?></p>
                   	</form>    
                </article>
                <article class="col-md-6">
                    <h6 class="mt-4 mb-3">Reach Us</h4> 
                    <iframe class="embed-responsive" width="75%" height="85%" frameborder="0" style="border:0"
                        src="https://www.google.com/maps/embed/v1/place?q=cift%20cochin&key=AIzaSyAC1CsY1fAU95M9Qo8_QeoakoqgSrfaQwM " allowfullscreen></iframe>
                </article>
            </section> 

            <footer class="row mx-5 px-5 py-2 dark-footer">
                <span class="col-md-6 text-light left">All Rights Reserved © 2022</span>
                <span class="col-md-6 ps-2 right"><a class="text-decoration-none" href="#">ICAR - CIFT, Cochin</a></span>
            </footer>  
        </div>  
    </body>
</html>