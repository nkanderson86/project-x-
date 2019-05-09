import Axios from "axios";
import Pusher from "pusher-js/react-native"
import API from './../utils/API'

// add third param 'page' here to feed switch statement.
function UserSetup(UID, cb, page) {
    this.interceptor = Axios.interceptors.request.use(config => {
        if (UID) {
            config.headers = { user: UID }
        }
        return config;
    }, err => {
        return err
    })

    const pusher = new Pusher('b48dc9f2091a8e7665e9', {
        cluster: "us3",
        forceTLS: true
    })

    function hitApi() {
        API.getArduinos()
            .then(res => {
                console.log(res.data.piDevice.arduinos)
                let arduinos = res.data.piDevice.arduinos
                // TODO: Start Switch here
                switch (page) {
                    case "dashboard":
                        let tableData = []
                        arduinos.forEach(arduino => {
                            tableData.push([arduino.plantName, arduino.deviceId, arduino.status, 'test'])
                        })
                        cb({ tableData: tableData })
                        break;
                }
            })
            .catch(err => console.log('UAL Error: ', err))
    }

    const channel = pusher.subscribe("project-x");
    channel.bind("update", (data) => {
        if (data.id === UID) {
            hitApi()
        }
    })

    hitApi()

}

export default UserSetup;