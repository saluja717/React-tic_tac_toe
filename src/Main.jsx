import React  , {useState} from 'react'
import './index.css'
var contains = [2,2,2,2,2,2,2,2,2];
const win  = [[0,4,8],[2,4,6],[0,1,2],[3,4,5],[6,7,8],[0,3,6],[2,5,8],[1,4,7]];
var k=0;
var end = true;
const Main = () => {
    const [get,set]=useState(true);
    
   const check_winner = ()=>
   {
         for(var i=0;i<8;i++)
         {
             if(contains[win[i][0]]===contains[win[i][1]] && contains[win[i][1]]===contains[win[i][2]])
             {
                  if(contains[win[i][0]]==="X")
                  {
                     document.getElementById("data").innerHTML="X won the game";
                     end=false;
                  }
                  else if(contains[win[i][0]]==="0")
                  {
                      
                      document.getElementById("data").innerHTML="0 won the game";
                      end=false;
                  }
             }
              
         }
         if(k===9)
         {
             document.getElementById("data").innerText="Match Draw";
              end=false;
         }
   }
   
    const fun = (e)=>
    {
      
        
        if(e.target.innerText==='' && end)
        {
        if(get)
        {
            e.target.innerText="X";
            contains[e.target.className]="X"
            k++;
            set(false);
        }
        else
        {
            e.target.innerText="0";
            contains[e.target.className]="0";
            k++;
            set(true);
        }
       
        console.log(contains);
        check_winner();
      }
    }
   


    return (
        <>

        <div id="main">
             <p id="data"></p>
            <div id="board" onClick={fun}>
                <div id="square" className="0"></div>
                <div id="square" className="1"></div>
                <div id="square" className="2"></div>
                <div id="square" className="3"></div>
                <div id="square" className="4"></div>
                <div id="square" className="5"></div>
                <div id="square" className="6"></div>
                <div id="square" className="7"></div>
                <div id="square" className="8"></div>
                
            </div>
        </div>
            
        </>
    )
}
export default Main;