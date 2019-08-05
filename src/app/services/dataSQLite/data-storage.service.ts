import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject, SQLite } from '@ionic-native/sqlite/ngx';
import { Platform, MenuController } from '@ionic/angular';
import { AccesoGuard } from '../../guards/acceso.guard';
import { PrincipalGuard } from '../../guards/principal.guard';
import { Router } from '@angular/router';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

@Injectable({
  providedIn: 'root'
})
export class SQLiteService {
  private database: SQLiteObject;
  constructor(
              private sqlite: SQLite,
              private SQLiteporter: SQLitePorter,
              private platform: Platform,
              private guardForm: AccesoGuard,
              private guardLogin: PrincipalGuard,
              private router: Router,
              private menu: MenuController,
              private http: HttpClient
              ) {
                this.platform.ready().then(() => {
                  this.sqlite.create({
                    name: 'data.db',
                    location: 'default'
                  }).then((db: SQLiteObject) => {
                    this.database = db;
                    // tslint:disable-next-line:max-line-length
                    const sql = 'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, guid TEXT,CompanyID TEXT, FirstName TEXT, LastName TEXT, Email TEXT, Login TEXT, pass TEXT, passwordencry TEXT, Token TEXT, Active TEXT, WorkZoneID TEXT, companyName VARCHAR(100), logo TEXT, session TEXT);' +
                    // tslint:disable-next-line:max-line-length
                    'CREATE TABLE IF NOT EXISTS Forms (ID INTEGER PRIMARY KEY AUTOINCREMENT, IDform INTEGER(10), Name VARCHAR(150), Description TEXT, GUID TEXT, hasAsset VARCHAR(5), JSONquestion TEXT, Login TEXT);';
                    this.SQLiteporter.importSqlToDb(this.database, sql).then(() => {
                          console.log('Ejecutando base de datos');
                          console.log(sql);
                          this.comprobarSesion(this.database);
                        }).catch((e: any) => {
                            console.log(e);
                        });

                  }).catch(e => {
                    console.log('Error');
                  });
                });
               }

  comprobarSesion(db: SQLiteObject) {
    db.executeSql('SELECT * FROM Users WHERE session = ?', ['true'])
    .then(data => {
      if (data.rows.length > 0) {
          this.guardLogin.value = false;
          this.guardForm.value = true;
          this.router.navigate(['/formularios', data.rows.item(0).Token, data.rows.item(0).Login ]);
          console.log('existe el campo');
      } else {
        this.guardLogin.value = true;
        this.guardForm.value = false;
        console.log('No existe el campo');
        this.router.navigate(['/home']);
      }
    }).catch(e => {
        console.log('Error en la');
    });
  }


  getData() {
    let name;
    return this.database.executeSql('SELECT * FROM Users WHERE session = ?', ['true'])
    .then(data => {
      if (data.rows.length > 0) {
         name = {name: data.rows.item(0).companyName, logo: data.rows.item(0).logo};
      } else {
        name = {name: '', logo: '/assets/images/vtlogo.PNG'};
      }
      return Promise.resolve(name);
    }).catch(e => {
      return Promise.reject({name: '', logo: '/assets/images/vtlogo.PNG'});
    });
  }




  agregarData(user) {
    let message: any;
    return this.database.executeSql('SELECT * FROM Users WHERE Login = ?', [user.Login])
    .then((datos: any ) => {
      if (datos.rows.length > 0) {
        message = this.database.executeSql('UPDATE Users SET session = ?  WHERE Login = ?', ['true', user.Login])
        .then(() => {
          const data = {status: true, text: 'Inicio sesion correctamente'};
          return  data;
        }).catch(() => {
          const data = {status: true, text: 'Error al iniciar sesion'};
          return  data;
        });
      } else {
        // tslint:disable-next-line:max-line-length
        message = this.database.executeSql('INSERT INTO Users (guid, CompanyID, FirstName, LastName, Email, Login, pass, passwordencry, Token, Active, WorkZoneID, companyName, logo, session) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
       // tslint:disable-next-line:max-line-length
       [user.GUID, user.CompanyID, user.FirstName, user.LastName, user.Email, user.Login, user.pass, user.Password, user.AccessToken, user.Active, user.WorkzoneID, user.companyName, user.logo, 'true'])
        .then(() => {
          const data = {status: true, text: 'Usuario registrado con éxito'};
          return  data;
        }).catch(() => {
          const data = {status: false, text: 'No se pudo registrar, intentelo mas tarde'};
          return  data;
        });
      }
      return Promise.resolve(message);
    }).catch(e => {
      message = {status: false, text: 'Error al ejecutar el query'};
      return Promise.reject(message);
    });

  }


  closeSession() {
    let value;
    return this.database.executeSql('SELECT * FROM Users WHERE session = ?', ['true']).then(data => {
      if(data.rows.length > 0) {
        return this.database.executeSql('UPDATE Users SET session = ? WHERE session = ?', ['false', 'true'])
        .then(() => {
          this.guardForm.value = false;
          this.guardLogin.value = true;
          this.menu.close('formularios');
          this.router.navigate(['/home']);
          return value = true;
        }).catch(() => {
          return value = false;
        });
      } else {
        value = false;
      }

      return Promise.resolve(value);
    }).catch(() => {
      return Promise.reject(false);
    });
  }

// querys para formularios

comprobarForm(data){
  // tslint:disable-next-line:max-line-length
  let status;
  return this.database.executeSql('SELECT * FROM Forms WHERE Login = ?', [data]).then((item: any) => {
    if (item.rows.length > 0) {
      status = true;
    } else {
      status = false;
    }
    return Promise.resolve(status);
  }).catch(() => {
    return Promise.reject(false);
  });
}

saveDataFrom(data){
       // tslint:disable-next-line:max-line-length
      this.database.executeSql('INSERT INTO Forms(IDform, Name, Description, GUID, hasAsset, JSONquestion, Login) VALUES(?,?,?,?,?,?,?)', [data.ID, data.Name, data.Description, data.Guid, data.hasAsset, data.JSONQuestions, data.Login]).then(() => {
      }).catch(() => {
        console.log('Problemas al insertar el formulario');
      });
}


updateDataFrom(data){
  // tslint:disable-next-line:max-line-length
 this.database.executeSql('UPDATE Forms SET Name = ?, Description = ?, GUID = ?, hasAsset = ?, JSONquestion = ? WHERE IDform = ? AND Login = ?', [data.Name, data.Description, data.Guid, data.hasAsset, data.JSONQuestions, data.ID, data.Login]).then(() => {
 }).catch(() => {
   console.log('Problemas al actu el formulario');
 });
}


getFormData(id) {
  return this.database.executeSql('SELECT * FROM Forms WHERE IDform = ?', [id]).then((data: any) => {
    let datos = {};
    if ( data.rows.length > 0) {
      datos = {
        Name: data.rows.item(0).Name,
        JSONquestion: JSON.parse(data.rows.item(0).JSONquestion.toString())
      };
    }
    return Promise.resolve(datos);
  }).catch((e) => {
    return Promise.reject('Error al consultar el formulario');
  });
}



get() {
  return this.database.executeSql('SELECT * FROM Forms', []).then((data: any) => {
    const datos = [];
    if (data.rows.length > 0) {
     // tslint:disable-next-line:prefer-for-of
     for (let i = 0; i < data.rows.length; i++) {
      datos.push(data.rows.item(i));
     }
    }
    return Promise.resolve(datos);
  }).catch((e) => {
    return Promise.reject('Error al consultar el formulario');
  })
}



}

