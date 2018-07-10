exports.run = async (message, args) => {
    return message.channel.send({embed: {
        color: 128478,
        title: "Nonce Setters",
        fields: [{
            name: "V0rtexnonce (iOS 10)",
            value: "Find it [here](https://www.dropbox.com/s/v00wwud8jcbce8p/v0rtexNonce.ipa?dl=1)"
        },
        {
            name: "nonceset1112 (iOS 11.0 - 11.1.2)",
            value: "Find it [here](https://github.com/julioverne/NonceSet112/raw/master/NonceSet1112_v1.3.ipa)"
        },
        {
            name: "noncereboot1131 (iOS 11.2 - 11.3.1)",
            value: "Find it [here](http://xnu.science/noncereboot1131UI/noncereboot1131UI.ipa)"
        }]
    }})
}