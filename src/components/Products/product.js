import Slider from "react-slick";
import { useState, useEffect } from "react";
import "./product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { v4 as uuidv4 } from "uuid";

export let products = [
  // Rice Products
  {
    id: 1,
    name: "Basmati Rice",
    type: "rice",
    price: 60, // per Kg
    sizes: ["5kg", "10kg", "25kg", "50kg"],
    image: [
      "/images/basmati-rice-bag.png",
      "/images/basmati-rice-after-cooking.png",
      "/images/basmati-rice-before-cooking.png"
    ],
    quantities: [
      { id: uuidv4(), size: "5kg", quantity: 1, unitPrice: 60, totalPrice: 300 },
      { id: uuidv4(), size: "10kg", quantity: 1, unitPrice: 60, totalPrice: 600 },
      { id: uuidv4(), size: "25kg", quantity: 1, unitPrice: 60, totalPrice: 1500 },
      { id: uuidv4(), size: "50kg", quantity: 1, unitPrice: 60, totalPrice: 3000 }
    ],
    defaultWeight: null,
    defaultWeightId: null
  },
  {
    id: 2,
    name: "Sona Masoori Rice",
    type: "rice",
    price: 50, // per Kg
    sizes: ["5kg", "10kg", "25kg", "50kg"],
    image: [
      "/images/sonamasoor-rice-packet.png",
      "/images/sonamasoor-rice-before-cooking.png",
      "/images/sonamasoor-rice-after-cooking.png"
    ],
    quantities: [
      { id: uuidv4(), size: "5kg", quantity: 1, unitPrice: 50, totalPrice: 250 },
      { id: uuidv4(), size: "10kg", quantity: 1, unitPrice: 50, totalPrice: 500 },
      { id: uuidv4(), size: "25kg", quantity: 1, unitPrice: 50, totalPrice: 1250 },
      { id: uuidv4(), size: "50kg", quantity: 1, unitPrice: 50, totalPrice: 2500 }
    ],
    defaultWeight: null,
    defaultWeightId: null
  },
  {
    id: 3,
    name: "Ponni Rice",
    type: "rice",
    price: 55, // per Kg
    sizes: ["5kg", "10kg", "25kg", "50kg"],
    image: [
      "/images/ponni-rice-packet.png",
      "/images/ponni-rice-before-cooking.png",
      "/images/ponni-rice-after-cooking.png"
    ],
    quantities: [
      { id: uuidv4(), size: "5kg", quantity: 1, unitPrice: 55, totalPrice: 275 },
      { id: uuidv4(), size: "10kg", quantity: 1, unitPrice: 55, totalPrice: 550 },
      { id: uuidv4(), size: "25kg", quantity: 1, unitPrice: 55, totalPrice: 1375 },
      { id: uuidv4(), size: "50kg", quantity: 1, unitPrice: 55, totalPrice: 2750 }
    ],
    defaultWeight: null,
    defaultWeightId: null
  },
  {
    id: 4,
    name: "Organic Rice",
    type: "rice",
    price: 80, // per Kg
    sizes: ["5kg", "10kg", "25kg", "50kg"],
    image: [
      "/images/organic-rice-packet.png",
      "/images/organic-rice-before-cooking.png",
      "/images/organic-rice-after-cooking.png"
    ],
    quantities: [
      { id: uuidv4(), size: "5kg", quantity: 1, unitPrice: 80, totalPrice: 400 },
      { id: uuidv4(), size: "10kg", quantity: 1, unitPrice: 80, totalPrice: 800 },
      { id: uuidv4(), size: "25kg", quantity: 1, unitPrice: 80, totalPrice: 2000 },
      { id: uuidv4(), size: "50kg", quantity: 1, unitPrice: 80, totalPrice: 4000 }
    ],
    defaultWeight: null,
    defaultWeightId: null
  },

  // Oil Products
  {
    id: 5,
    name: "Sunflower Oil",
    type: "oil",
    price: 120, // per Litre
    sizes: ["1L", "5L", "10L"],
    image: "/images/sunflower-oil.png",
    quantities: [
      { id: uuidv4(), size: "1L", quantity: 1, unitPrice: 120, totalPrice: 120 },
      { id: uuidv4(), size: "5L", quantity: 1, unitPrice: 120, totalPrice: 600 },
      { id: uuidv4(), size: "10L", quantity: 1, unitPrice: 120, totalPrice: 1200 }
    ],
    defaultWeight: null,
    defaultWeightId: null
  },
  {
    id: 6,
    name: "Mustard Oil",
    type: "oil",
    price: 150, // per Litre
    sizes: ["1L", "5L", "10L"],
    image: "/images/mustard-oil.png",
    quantities: [
      { id: uuidv4(), size: "1L", quantity: 1, unitPrice: 150, totalPrice: 150 },
      { id: uuidv4(), size: "5L", quantity: 1, unitPrice: 150, totalPrice: 750 },
      { id: uuidv4(), size: "10L", quantity: 1, unitPrice: 150, totalPrice: 1500 }
    ],
    defaultWeight: null,
    defaultWeightId: null
  },
  {
    id: 7,
    name: "Groundnut Oil",
    type: "oil",
    price: 140, // per Litre
    sizes: ["1L", "5L", "10L"],
    image: "/images/groundnut-oil.png",
    quantities: [
      { id: uuidv4(), size: "1L", quantity: 1, unitPrice: 140, totalPrice: 140 },
      { id: uuidv4(), size: "5L", quantity: 1, unitPrice: 140, totalPrice: 700 },
      { id: uuidv4(), size: "10L", quantity: 1, unitPrice: 140, totalPrice: 1400 }
    ],
    defaultWeight: null,
    defaultWeightId: null
  },
  {
    id: 8,
    name: "Cold-Pressed Oil",
    type: "oil",
    price: 200, // per Litre
    sizes: ["1L", "5L", "10L"],
    image: "/images/cold-pressed-oil.png",
    quantities: [
      { id: uuidv4(), size: "1L", quantity: 1, unitPrice: 200, totalPrice: 200 },
      { id: uuidv4(), size: "5L", quantity: 1, unitPrice: 200, totalPrice: 1000 },
      { id: uuidv4(), size: "10L", quantity: 1, unitPrice: 200, totalPrice: 2000 }
    ],
    defaultWeight: null,
    defaultWeightId: null
  }
];
products=products.map(each=>({...each,quantity:1}))


export const Products = ( props) => {
  // const [displayedArray, setDisplayedArray] = useState(products);
  const {displayedArray,setDisplayedArray,cart,setCart}=props
  const [isAddToCart, setIsAddToCart] = useState(null);
  const [sizeQuantity, setSizeQuantity] = useState(1);
  useEffect(()=>{
    console.log(cart,"c")
  })


  const onClickAdd=(e)=>{
    console.log(sizeQuantity,"s")
    const getItem=displayedArray.find(each=>each.id===parseInt(e.target.id))
    const updatedArray=displayedArray.map(each=>{
      if (each.id===getItem.id){
        return ({
          ...each,quantity:each.quantity+1,quantities:each.quantities.map(i=>{
            if (i.id===e.target.dataset.key){
              setSizeQuantity(prev=>prev+1)
              return ({...i,quantity:i.quantity+1})
              // setSizeQuantity(prev=>prev+1)
            }
            else{
              return i
            }
          })
        })
      }
      else{
        return each
      }
      // setDisplayedArray(u)
    })
    
    // 
    setDisplayedArray(updatedArray)

  }
  const onClickPickToCart=(e)=>{
    const updatedArray=displayedArray.map(each=>{
      if (each.id===parseInt(e.target.id)){
        return ({...each,quantity:1,quantities:each.quantities.map(i=>{
          if (i.id===each.defaultWeightId){
            return ({...i,quantity:1})
          }
          else{
            return i
          }
        })})
      }
      else{
        return each
      }
    })

    const getItem=displayedArray.find(each=>each.id===parseInt(e.target.id))
    let cartItem=cart.find(each=>each.id===getItem.id && each.defaultWeightId===getItem.defaultWeightId)
    if (cartItem){
      setCart(prev=>prev.map(each=>{
        if (each.id===cartItem.id && each.defaultWeightId===cartItem.defaultWeightId){
          return ({
            ...each,quantity:getItem.quantity
          })
        }
        else{
          return each
        }
      }))
    }
    else{
      setCart(prev=>[...prev,getItem])
    }

    setDisplayedArray(updatedArray)
    setIsAddToCart(null)

    

  }
  const onClickMinus=(e)=>{
    const getItem=displayedArray.find(each=>each.id===parseInt(e.target.id))
    const updatedArray=displayedArray.map(each=>{
      if (each.id===getItem.id){
        if (each.quantity>1){
          return ({...each,quantity:each.quantity-1,quantities:each.quantities.map(i=>{
            if (i.id===e.target.dataset.key){
              if (i.quantity>1){
                return ({...i,quantity:i.quantity-1})
              }
              else{
                setIsAddToCart(null)
                return ({...i,quantity:1})
              }
            }
            else{
              return i
            }
          })})
        }
        else{

          setIsAddToCart(null)
          return ({...each,quantity:1})
          
        }

      }
      else{
        return each
      }

    })
    setDisplayedArray(updatedArray)
  }

  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    arrows: false,
  };
  console.log(displayedArray,"d")

  const onSelectWeight=e=>{
    const getItem=displayedArray.find(each=>each.id===parseInt(e.target.id))
    const updatedArray=displayedArray.map(each=>{
      if (each.id===getItem.id){
        return ({...each,defaultWeight:e.target.options[e.target.selectedIndex].textContent,defaultWeightId:e.target.options[e.target.selectedIndex].id})
      }
      else{
        return each
      }
    })
    setDisplayedArray(updatedArray)
  }
  const onClickAddToCart=e=>{
    setIsAddToCart(parseInt(e.target.id))
  }
  
  return (
    <div className="products-container">
      {displayedArray.map((each) => (
        <div className="product-card" key={each.id}>
          {/* Image Slider */}
          {Array.isArray(each.image) ? (
            <Slider className="product-slider" {...settings}>
              {each.image.map((img, idx) => (
                <img src={img} alt={each.name + idx} key={idx} className="product-image"/>
              ))}
            </Slider>
          ) : (
            <img src={each.image} alt={each.name} className="product-image"/>
          )}

          {/* Product Info */}
          <h3 className="product-name">{each.name}</h3>
          <p className="product-weight">Selected: {each.defaultWeight?each.defaultWeight:"Not Selected Yet"}</p>
          <p className="product-price">₹{each.price} per unit</p>

          {/* Weight Selector */}
          <select
            onChange={(e) => onSelectWeight(e, each)}
            className="product-select"
            id={each.id}
          >
            <option disabled hidden selected >
              Select Weight
            </option>
            {each.quantities.map((q) => (
              <option id={q.id} key={q.id}>
                {q.size}
              </option>
            ))}
          </select>

          {/* Add To Cart / Quantity */}
          {isAddToCart === each.id ? (
            <div className="product-counter-container">
              <div className="quantity-container">
                <button className="qty-btn" id={each.id} data-key={each.defaultWeightId} disabled={each.defaultWeightId?false:true} onClick={onClickMinus}>-</button>
                <span className="quantity">{each.quantity}</span>
                <button className="qty-btn" id={each.id} data-key={each.defaultWeightId} disabled={each.defaultWeightId?false:true} onClick={onClickAdd}>+</button>
              </div>
              <button className="pick-to-cart-btn" id={each.id} data-key={each.defaultWeightId} disabled={each.defaultWeight?false:true} onClick={onClickPickToCart}>Pick To Cart</button>
            </div>
          ) : (
            <button
              className="pick-to-cart-btn"
              onClick={onClickAddToCart}
              id={each.id}
              disabled={each.defaultWeight?false:true}
            >
              Add To Cart
            </button>
          )}
        </div>
      ))}
    </div>
  );
};
