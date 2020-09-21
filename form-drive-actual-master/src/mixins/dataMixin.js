import axios from "axios"
import { I_BASE_URL } from "../../_helper/api-base";
export const dataMixin = {
    data(){
        return {
            AuthStr:'Bearer '+localStorage.getItem("token"),
            //baseURL:'https://internalapi.digitastic.app/',
            //baseURL:process.env.VUE_APP_SERVICE_BASE_URL,
            //helperURL:process.env.VUE_APP_SERVICE_HELPER_URL
            consultantId:localStorage.getItem("consultantId"),
            isConsultant:false,
            userName: localStorage.getItem("username"),
        }
    },
    filters:{
        toUppercase(value){
            return value.toUpperCase();
        }
    },
    methods : {
        getFileData (){
            return axios.get("api/data.json");
        },
        getDriveFolder(data,isPrivate){
          //console.log("data=>",typeof data)
            if(data==null) {
              if(isPrivate==false){
                return axios.get(I_BASE_URL+"driveFolder?limit=500&filter=consultantId:"+this.consultantId+",isPrivate:"+isPrivate,{ headers: { Authorization: this.AuthStr } });
              }else{
                return axios.get(I_BASE_URL+"driveFolder?limit=500&filter=consultantId:"+this.consultantId,{ headers: { Authorization: this.AuthStr } });
              }

            }
            else return axios.get(I_BASE_URL+"driveFolder?limit=500"+data,{ headers: { Authorization: this.AuthStr } });
        },
        getDriveDocument(data){
            if(data==null) return axios.get(I_BASE_URL+"driveDocument?limit=500",{ headers: { Authorization: this.AuthStr } });
            return axios.get(I_BASE_URL+"driveDocument?limit=500"+data,{ headers: { Authorization: this.AuthStr } });
        },
       
        getUserData(){
            
            fetch(I_BASE_URL+"user?filter=username:'"+this.userName+"'&fields=isConsultant,isConsultantAdmin,isConsultantUser",{ 
              method: 'GET',
              headers: {Authorization: this.AuthStr},
            }).then(res => res.json()).then(res => {
              if(res.count!=0){
                res.body.forEach(element => {
                  //console.log("element=>",element)
                  if(element.isConsultant==true || element.isConsultantAdmin==true || element.isConsultantUser==true){
                    this.isConsultant=true;
                  }
                  else{
                    this.isConsultant=false;
                  }
                });
              }
            }).catch()
            
        }
        
    },
    mounted(){
      // Clear the browser cache data in localStorage when closing the browser window
      //console.log("window=>",window)
      // window.onbeforeunload = function () {
      //     var storage = window.localStorage;
      //     storage.clear()
      // }
  },
    created(){
      this.getUserData()
    }
    
}