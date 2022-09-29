import React from "react";

export default function Footer(){
    return(
        <>
        <div className="footer">
    <div class="container text-center" >
  {/* <div class="row">
    <div class="col-sm-8"></div>
    <div class="col-sm-4">Join Us on <a href="https://getbootstrap.com/docs/5.2/layout/grid/">Email</a> </div>
  </div> */}
  <br></br>
  <div class="row">
    <div class="col-sm" ><h3>Contact Us</h3>
    <ul class="list-group list-group-flush">
        <li><b>Corporate Office</b><br></br>
        Dayananda Sagar University. Shavige Malleshwara Hills, Kumaraswamy Layout, Bengaluru- 560 111,Karnataka,India. Phone Number. 080-46461800, 42161759
        </li>
        <li><b>Email:</b><a href="/ContactUs">arsystems@queries.com</a> </li>      
</ul>
    </div>
    <div class="col-sm"><h3>Where do we serve</h3>
    <ul class="list-group list-group-flush">
        <li>India<br></br></li>
        <li>London<br></br></li>
        <li>Australia<br></br></li>
        </ul>
    </div>
    <div className="col-sm"><h3>Meet us on Social Media</h3>
    {/* <ul class="list-group list-group-flush"> */}
        
     <div style={{display : "flex" , justifyContent : "space-between", "marginLeft":"20%"}}> <a href='https://twitter.com/?lang=en-in'><img src="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png" style={{width : '30px',height:'25px'}}/></a>
      <a href='https://www.facebook.com'><img src="https://classicrock995.com/wp-content/uploads/2020/11/Facebook-logo.png" style={{width : '30px',height:'25px'}}/></a>
        <a href='https://www.instagram.com'><img src="https://clipartcraft.com/images/instagram-logo-outline-2.png" style={{width : '30px',height:'25px'}}/></a>
        <br></br>
        </div>
        <br></br>
        <p className="text-center" style={{color: 'white'}}><a href="/NewsL" style={{color: 'white'}}><h7>Subscribe to our Newsletter</h7></a></p>
        <p className="text-center" style={{color: 'black'}}>Are you a Vendor?<a href="/SignUp" style={{color:"white"}}><h7>Join Us</h7></a></p>
        
        {/* </ul> */}
</div>
        
        
    </div>
  </div>
</div>
  </>

    )
  
};

{/* //import React from "react";

// const Footer = () => (
//   <div className="footer">
//     <p>This is some content in sticky footer</p>
//   </div>
// );

// export default Footer;
// import React from "react";
// import { 
// Box,
// Container,
// Row,
// Column,
// FooterLink,
// Heading,
// } from "./FooterStyles";

// const Footer = () => {
// return (
// 	<Box>
// 	<h1 style={{ color: "green",
// 				textAlign: "center",
// 				 }}>
// 		Your Go-to Website for your Airlines
// 	</h1>
// 	<Container>
// 		<Row>
// 		<Column>
// 			<Heading>About Us</Heading>
// 			<FooterLink href="#">Aim</FooterLink>
// 			<FooterLink href="#">Vision</FooterLink>
// 			<FooterLink href="#">Testimonials</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Products and Services</Heading>
// 			<FooterLink href="#">Air Fuels</FooterLink>
// 			<FooterLink href="#">Air Fuels</FooterLink>
// 			<FooterLink href="#">Air Fuels</FooterLink>
// 			<FooterLink href="#">Air Fuels</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Contact Us</Heading>
// 			<FooterLink href="#">India</FooterLink>
// 			<FooterLink href="#">London</FooterLink>
// 			<FooterLink href="#">Australia</FooterLink>
// 			<FooterLink href="#">Qatar</FooterLink>
// 		</Column>
// 		<Column>
// 			<Heading>Social Media</Heading>
// 			<FooterLink href="https://www.facebook.com">
// 			<i className="fab fa-facebook-f">
// 				<span style={{ marginLeft: "10px" }}>
// 				Facebook
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="https://www.instagram.com">
// 			<i className="fab fa-instagram">
// 				<span style={{ marginLeft: "10px" }}>
// 				Instagram
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="https://www.twitter.com">
// 			<i className="fab fa-twitter">
// 				<span style={{ marginLeft: "10px" }}>
// 				Twitter
// 				</span>
// 			</i>
// 			</FooterLink>
// 			<FooterLink href="https://www.youtube.com">
// 			<i className="fab fa-youtube">
// 				<span style={{ marginLeft: "10px" }}>
// 				Youtube
// 				</span>
// 			</i>
// 			</FooterLink>
// 		</Column>
// 		</Row>
// 	</Container>
// 	</Box>
// );
// };
// export default Footer;
*/}