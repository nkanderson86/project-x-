import Axios from "axios";
import Pusher from "pusher-js/react-native"
import API from './../utils/API'

// add third param 'page' here to feed switch statement.
/**
 * 
 * @description Method that authenticates and handles functions that require being authenticated
 * @param {String} UID User Id used for authentication
 * @param {Function} cb Callback function to use on resolve
 * @param {String} page Page that method is being called on
 * @param {Int} deviceId Arduino device ID being used
 */
function UserSetup(UID, cb, page, deviceId) {
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
                // console.log(res.data.piDevice.arduinos)
                // console.log("PAGE", page)
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
<<<<<<< HEAD
                    // case "editDevice":
                    // case "editSchedule": 
                    // TODO: figure out how that works w/ modal instead of new page 


=======
                    case "editDevice":
                        let scheduleData = []
                        arduinos.forEach(arduino => {
                            if (arduino.deviceId === deviceId) {
                                console.log("ARDUINO", arduino)
                                if (arduino.schedule) {
                                    scheduleData.push(arduino.schedule)
                                }
                            }
                        })
                        console.log("SCHEDULE DATA", scheduleData)
                        cb({ scheduleData: scheduleData })
                        break;
                    default:
                        console.log("DEFAULT HIT")
                        break;
>>>>>>> a51caef4a634ed7b3e070d20980839cc0941ab3d
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

    return pusher

}

export default UserSetup;