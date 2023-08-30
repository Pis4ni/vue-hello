const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'Hello Vue!',
        imgPath: 'https://th.bing.com/th/id/OIP.XR5fcbf-JECKgmMzvbvxUwHaGZ?w=219&h=189&c=7&r=0&o=5&dpr=1.8&pid=1.7'
      }
    }
  }).mount('#app')