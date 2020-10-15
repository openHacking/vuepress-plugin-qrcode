import QrCode from './QrCode.vue'
import Vue from 'vue'

export default {
    data(){
        return{
            initQr:false,
            qr:null,
        }
    },
    updated() {
        // Execute after waiting for dom to load
        const navlink = document.querySelector('.nav-links');
        const qrcodeBtn = document.querySelector('.qrcodeBtn');
        if( navlink != null && qrcodeBtn == null){
            this.$nextTick(() => {
                const navItem = document.createElement('DIV');
                navItem.className += 'nav-item';

                navItem.appendChild(this.qr.$el);
                navlink.appendChild(navItem);
            });
        }
      },
  mounted () {
    // Create qrcode component
    const C = Vue.extend(QrCode);
    const qr = new C();
    // The following are the props of the component and some private properties
    qr.labelText = labelText;
    qr.size = size;
    qr.$mount();
    
    this.qr = qr;
  }
}
