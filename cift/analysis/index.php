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
		<script src="js/bootstrap.bundle.min.js"></script>
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
    
            <section class="row mx-5 px-5">
                <div class="col-lg-7"><img class="img-fluid" src="image/cover.jpg" alt="cover" /></div>
                <article class="col-lg-5 text-center bg-light">
                    <h3 class="pt-5 pb-3">Analysis of Quality Parameters</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br />
                        It has survived not only five centuries, but also the leap into electronic typesetting, 
                        remaining essentially unchanged. 
                    </p>
                    <a class="btn btn-primary btn-sm text-capitalize my-2 px-3" href="analysis.html">read more</a>
                </article>        
            </section>
            
            <section id="contact-form" class="row mx-5 px-5">
                <div class="col-md-5 bg-contact ps-4 pt-4">
                    <h6>Contact Us</h6>
                    <p>ICAR - Central Institute of Fisheries Technology <br />
                        <i class="fa fa-map-marker pt-2 pe-2" aria-hidden="true"></i>
                        Willingdon Island, Matsyapuri P O, <br />
                        <span class="ps-4">Cochin, Kerala</span> <br />
                        <i class="fa fa-phone pt-2 pe-2" aria-hidden="true"></i>
                        Tel : +(91) 484 2412300 <br />
                        <span class="ps-4">Fax : +(91) 484 2668212</span> <br />
                        <i class="fa fa-envelope pt-2 pe-2" aria-hidden="true"></i>
                        <a class="text-decoration-none" href="mailto:akmu.cift@icar.gov.in">akmu.cift@icar.gov.in</a>
                    </p>
                </div>
                <div id="cForm" class="col-md-4 bg-contact ps-4 pt-4 pb-4">
                    <h6>Mail Us</h4>              
                    <form action="#" method="post">
                        <input class="mb-1" type="text" name="txtName" placeholder="Name" required><br/>
                        <input class="mb-1" type="email" name="txtEmail" placeholder="Email" required><br/>
                        <textarea name="txtMessage" placeholder="Message..." required></textarea><br />
                        <input class="btn btn-primary py-1" type="submit" value="Submit">
                        <p class="fs-6 pt-2"><?php include('message.php') ?></p>
                    </form>
                </div>
                <div class="col-md-3 bg-contact ps-4 pt-4">
                    <h6>Quick Links</h6>
                    <ul class="p-0">
                        <li class="list-unstyled"><a href="index.php" class="text-decoration-none">Home</a></li>
                        <li class="list-unstyled"><a href="analysis.html" class="text-decoration-none">Quality Analysis</a></li>
                        <li class="list-unstyled"><a href="terms.html" class="text-decoration-none">Terms & Conditions</a></li>
                        <li class="list-unstyled"><a href="copyright.html" class="text-decoration-none">Copyright Policy</a></li>
                        <li class="list-unstyled"><a href="privacy.html" class="text-decoration-none">Privacy Policy</a></li>
                        <li class="list-unstyled"><a href="disclaimer.html" class="text-decoration-none">Disclaimer</a></li>
                    </ul>
                </div>
            </section>  
            <footer class="row mx-5 px-5 py-1">
                <span class="col-md-6 bg-light left">All Rights Reserved © 2022</span>
                <span class="col-md-6 bg-light ps-2 right"><a class="text-decoration-none" href="#">ICAR - CIFT, Cochin</a></span>
            </footer>  
        </div>
    </body>
</html>