import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
toDoList: AngularFireList<any>;
constructor(private firebasedb: AngularFireDatabase) {}

get.toDoList(){this.toDoList = this.firebasedb.list('titles');
return this.toDoList;
}

addTitle(title: string){
  this.toDoList.push({title: title,
    isChecked:false});
}
  checker($key:string, flag: boolean){this.toDoList.update($key, {isChecked: flag});
}

remove($key: string)
{
  this.toDoList.remove($key);
}

}
