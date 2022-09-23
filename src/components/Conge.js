import React from "react";
class Conge extends React.Component
{
// eslint-disable-next-line no-useless-constructor
constructor(props)
{
    super(props);
    this.state={valeur1:0};
}
verification()
{
    // eslint-disable-next-line no-lone-blocks
    {
        let valeur1=this.state.valeur1;
        let valeur2=this.state.valeur2;
        let valeur3=this.state.valeur3;
        let valeur4=this.state.valeur4;
        let valeur5=this.state.valeur5;
    if(valeur1 == 0)
    alert("Durée incorrecte");
    else if (valeur2 != "repos" && values.valeur4.length ==0)
    alert("Cause incorrecte")
    else if (valeur2 = "repos" && valeur1 >= valeur5)
    alert("Repos incorrect")
    else alert ("Informations correctes") 
    }
}
 verif= () => 
{
    let valeur1=this.state.valeur1;
    let valeur2=this.state.valeur2;
    let valeur3=this.state.valeur3;
    let valeur4=this.state.valeur4;
    let valeur5=this.state.valeur5;
if(valeur1 == 0)
alert("Durée incorrecte");
else if (valeur2 != "repos" && values.valeur4.length ==0)
alert("Cause incorrecte")
else if (valeur2 = "repos" && valeur1 >= valeur5)
alert("Repos incorrect")
else alert ("Informations correctes")

}
    render()
    {
        return(
        
            <><h1>Salaire</h1><br />
            <form >
                Durée :<input type="number" min="0" value={this.state.valeur1} onChange={(e)=>this.setState({valeur1 : e.target.value})}/>
                Type :<input type="number" min="0" value={this.state.valeur2} onChange={(e)=>this.setState({valeur2 : e.target.value})}/>
                Début :<input type="number" min="0" value={this.state.valeur3} onChange={(e)=>this.setState({valeur3 : e.target.value})}/>
                Cause :<input type="number" min="0" value={this.state.valeur4} onChange={(e)=>this.setState({valeur4 : e.target.value})}/>
                Reste :<input type="number" min="0" value={this.state.valeur5} onChange={(e)=>this.setState({valeur5 : e.target.value})}/>
                <button onClick={this.verif} type="button">Verifier</button>
            </form>
            
            </>

    
        )
    }



}
export default Conge;