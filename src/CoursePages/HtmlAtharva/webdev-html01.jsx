import React from 'react';
import PageTemplate from '../coursePage';
import Book1 from './HTML CSS JavaScript by ARB.pdf';
import Quiz from '../../Quiz/Quiz';
import WebDevCompiler from '../../Compilers/WebDevCompiler';
import Footer from '../../footer';
import FeedbackTemplate from '../../Feedback/feedback';

const Html01 = () => {
  return (
    <div>
      <PageTemplate CourseName='Html Complete Course' Section1=' Introduction to Web Development ' Section2=' Basic Html Tags ' Section3=' Html Forms, Tables, Multimedia, Lists ' Section4=' HTML Semantics and Embeddings ' Section5='Intoduction to basic CSS ' video='https://youtube.com/embed/9xIKMpzcbcc' Book1={Book1} Book1Name='HTML Cheat Sheet' Author1=' Atharva Bhagat' Book1Desc='This cheat sheet contains all necessary tags and material to start practising HTML' Book1={Book1} Book2Name='HTML CSS JS Notes' Author2=' Atharva Bhagat' Book2Desc='This book contains handwritten notes of HTML , CSS and JavaScript' />

      <WebDevCompiler
        Language='html'
        Button1='Heading Tags'
        Button1Text='
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3> 
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>'
        Button2='Paragraphs'
        Button2Text='
        <p>
        This paragraph
        contains a lot of lines
        in the source code,
        but the browser
        ignores it.
        </p>
        
        <p>
        This paragraph
        contains         a lot of spaces
        in the source         code,
        but the        browser
        ignores it.
        </p>'
        Button3='Images'
        Button3Text='
        <img src="https://hci-aws-media.s3-accelerate.amazonaws.com/2020/07/connected-technology.jpg"  alt="Technology"/>'
        Button4='Links'
        Button4Text='<a href="https://www.google.com" target="_blank">Google</a>
      <a href="/dashboard" target="_blank">Dashboard</a>'
        Button5='Form Elements'
        Button5Text='<form>

      <!-- Text Input -->
      <label for="fname">First name:</label><br>
      <input type="text" id="fname" name="fname"><br>
      <label for="lname">Last name:</label><br>
      <input type="text" id="lname" name="lname"><br>


      

      

      <!-- Radio Buttons -->
      <input type="radio" id="html" name="fav_language" value="HTML">
      <label for="html">HTML</label><br>
      <input type="radio" id="css" name="fav_language" value="CSS">
      <label for="css">CSS</label><br>
      <input type="radio" id="javascript" name="fav_language" value="JavaScript">
      <label for="javascript">JavaScript</label><br>

      <!-- Check Box -->
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
      <label for="vehicle1"> I have a bike</label><br>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
      <label for="vehicle2"> I have a car</label><br>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat">
      <label for="vehicle3"> I have a boat</label><br>

      <!-- Submit Button -->
      <button type="button">Click Me!</button>


      
    </form>'
        Button6='Lists , Tables'
        Button6Text='
     <ul>
     <li>Coffee</li>
     <li>Tea</li>
     <li>Milk</li>
     </ul>

     <ol>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
    </ol>

    <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>


    '
      />

      <Quiz name='Html Complete Course' TutorName='Atharva Bhagat' courseId='webdev-html01' />
      {/* <Quiz name='Javascript Complete Course' tutorName='Bhavesh Mhadse' courseID='javascript01' /> */}

      <FeedbackTemplate CourseName='Html Complete Course' TutorName='Atharva Bhagat' ratings='4.7' five='20' four='14' three='3' two='2' one='1' understandable='4.8' friendly='4.8' technical='4.7' />

      <Footer />
    </div>
  );
};

export default Html01;
