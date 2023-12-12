import { teachers } from "../data/TeachersData.js";
import { students } from "../data/StudentsData.js";
import { data } from "../data/ClassesData.js";

export function createHome() {
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = `
    <div class="homeClasses">
      <div class="hometitleDiv">
        <h2 class ="hometitle">Welcome User</h2> 
      </div>
      <div class="row homeclassBody"> 
         
       <div class="col-lg-4 col-md-6 col-sm-12">
       <div class="homeclassBodyDiv">
       <div class="homeimgDiv">
         <img class="homeImg" src="https://st3.depositphotos.com/9880800/16371/i/450/depositphotos_163715564-stock-photo-kids-raising-hands-in-class.jpg" alt="name" />
         </div>
          <h4 class="homecartTitle">Number Of Students : ${students.length}</h4> 
         </div>
         </div>

       <div class="col-lg-4 col-md-6 col-sm-12">
       <div class="homeclassBodyDiv">
       <div class="homeimgDiv">
       <img class="homeImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlCFAA8LIrGYcmosrXsl_UQImm4UKUrBjUzA&usqp=CAU" />
       </div>
          <h4 class="homecartTitle">Number Of Classes : ${data.length}</h4> 
         </div>
         </div>

       <div class="col-lg-4 col-md-6 col-sm-12">
       <div class="homeclassBodyDiv">
       <div class="homeimgDiv">
       <img class="homeImg" src="https://static.vecteezy.com/system/resources/thumbnails/002/292/662/small/people-avatar-collection-free-vector.jpg" alt="name" />
       </div>
          <h4 class="homecartTitle">Number Of Teachers : ${teachers.length}</h4> 
         </div>
         </div>


              
           </div>
        </div>
    </div>
  `;
}

