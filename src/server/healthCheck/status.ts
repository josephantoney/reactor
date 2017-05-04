import * as os from 'os';

class Status{
    static getOSInfo(){
        return os.hostname();
    }
}

export default Status;