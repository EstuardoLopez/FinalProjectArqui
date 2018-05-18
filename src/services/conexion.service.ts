import { Injectable } from "@angular/core";
import { ToastController, Item, LoadingController } from "ionic-angular";
import { AngularFireDatabase } from "angularfire2/database/database";

@Injectable()
export class ConexionService {

    loader = null;

    constructor(public toastCtrl: ToastController, 
        public afDB: AngularFireDatabase,
        public loadingCtrl: LoadingController      
    ){}

    /**
     * getFirstElement
     * Este metodo va a buscar el elmento de la
     * rama 'cantidad' y devuelve el registro mas reciente
     */

    public getFirstElement() {
        // this.showLoading();
        return this.afDB.list<Item>('cantidad/', ref => ref.limitToLast(1));
    }

    public hiddenLoading(){
        this.loader.dismiss();
    }

    public showLoading(){
        this.loader = this.loadingCtrl.create({
            content: "Espere por favor..."
        });
        this.loader.present();
    }

    public showMessage(message){
        let toast = this.toastCtrl.create({
            message:message,
            duration:3000
        });
        toast.present();
    }

    public createNote(note) {
        this.afDB.database.ref('notas/' + note.id).set(note);
        //this.loader.dismiss();
    }

}

