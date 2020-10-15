module.exports = {
    title: 'VuePress Plugin QRCode',
    description: 'Just playing around',
    "plugins": [
        // Here use require to import local files, please use the plug-in name for real use: "qrcode"
        [require('../../index'),{
            //Custom configuration can be added here, of course, the default value is used when not configured
            //We provide two configurations:labelText,size

            // labelText:'Mobile Read',
            // size:100
        }]
    ],
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Github', link: 'https://github.com/openHacking/vuepress-plugin-qrcode' },
        ]
      }
}