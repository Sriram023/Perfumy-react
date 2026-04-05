import pic1 from './assets/img/Perfume1.jpg';
import pic2 from './assets/img/Perfume2.jpg';
import pic3 from './assets/img/Perfume3.jpg';
function Products ()
 {
  return(
    <div class="Product">
        <div className="box">
            <p><img src={pic1} alt="Perfume 1" /></p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, suscipit adipisci consectetur perferendis nulla possimus officia omnis. Architecto, vitae officiis.</p>
        </div>
        <div className="box">
            <p><img src={pic2} alt="Perfume 2" /></p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur error vel odit libero cum sunt facere quibusdam quae deleniti tempore?</p>
        </div>
        <div className="box">
            <p><img src={pic3} alt="Perfume 3" /></p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore recusandae tempore a soluta quidem est odio id iure, sit vero!</p>
        </div>
    </div>
  )
 }
 export default Products
