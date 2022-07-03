class installment{
    constructor(packetPrice){   
        this.packetPrice = packetPrice + 2*(packetPrice/12) ;  
        console.log('Amount to paid :  ' , this.packetPrice);   
    }
    pay(){
          swal({                    
                text: "Payment success.",
                icon: "success",
                button: "Tamam",
         });
         }
}

class cash{
    constructor(packetPrice){
        this.packetPrice = packetPrice;
        console.log('Amount to paid :  ', this.packetPrice);
    }
    pay(){
       swal({                    
            text: "Payment success.",
            icon: "success",
             button: "Ok.",
         });        
      }
}

class free{
    pay(){
        console.log("ucretsiz paket");
        swal({                    
            text: "Free Trial Started",
            icon: "success",
             button: "Ok.",
         });
      }
}

class packetPicker{ 
    constructor(packetPrice)
     {
         this.packetPrice = packetPrice;
     }   
      toPay(strategyClas){
         const strategy = new strategyClas(this.packetPrice)
         strategy.pay();
     }
}


const proPacket = new packetPicker(270);
// proPacket.toPay(cash);

const normalPacket = new packetPicker(150);
// normalPacket.toPay(installment);
// normalPacket.toPay(cash);

const freePacket = new packetPicker(0);
// freePacket.toPay(free);

