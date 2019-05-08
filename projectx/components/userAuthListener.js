import Axios from "axios";
import Pusher from "pusher-js/react-native"


function UserSetup(UID, cb) {
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

    const channel = pusher.subscribe("project-x");
    channel.bind("update", (data) => {
        if (data.id === UID) {
            API.getArduinos()
                .then(res => {
                    console.log(res.data)
                    let tableData = []
                    cb({ tableData: tableData })
                })
                .catch(err => console.log('LOGIN ERROR: ', err))
        }
    })
}

export default UserSetup;