import React from "react";
class Employee extends React.Component
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
        let valeur6=this.state.valeur6;
    if(Number.isInteger(valeur1) && valeur1 > 0)
    alert("ID incorrect");
    else if (values.valeur2.length < 3)
    alert("Nom incorrect");
    else if(values.valeur3.length < 3)
    alert("Prenom incorrect");
    else if(values.valeur4.length < 21)
    alert("Age incorrect");
    else if(valeur5 == "admin")
    alert("Grade incorrect");
    else if(valeur5 == "ingénieur")
    alert("Grade incorrect");
    else if(valeur5 == "technicien")
    alert("Grade incorrect");
    else if(valeur5 == "ouvrier")
    alert("Grade incorrect");
    else if(values.valeur6.length <21)
    alert("Adresse incorrecte")
    else
    alert("Informations correcte")
    }
}
 verif= () => 
{
    let valeur1=this.state.valeur1;
    let valeur2=this.state.valeur2;
    let valeur3=this.state.valeur3;
    let valeur4=this.state.valeur4;
    let valeur5=this.state.valeur5;
    let valeur6=this.state.valeur6;
    if(Number.isInteger(valeur1) && valeur1 > 0)
    alert("ID incorrect");
    else if (values.valeur2.length < 3)
    alert("Nom incorrect");
    else if(values.valeur3.length < 3)
    alert("Prenom incorrect");
    else if(values.valeur4.length < 21)
    alert("Age incorrect");
    else if(valeur5 == "admin")
    alert("Grade incorrect");
    else if(valeur5 == "ingénieur")
    alert("Grade incorrect");
    else if(valeur5 == "technicien")
    alert("Grade incorrect");
    else if(valeur5 == "ouvrier")
    alert("Grade incorrect");
    else if(values.valeur6.length <21)
    alert("Adresse incorrecte")
    else
    alert("Informations correcte")

}
    render()
    {
        return(
        
            <><h1>Salaire</h1><br />
            <form >
                ID :<input type="number" min="0" value={this.state.valeur1} onChange={(e)=>this.setState({valeur1 : e.target.value})}/>
                Nom :<input type="number" min="0" value={this.state.valeur2} onChange={(e)=>this.setState({valeur2 : e.target.value})}/>
                Prenom :<input type="number" min="0" value={this.state.valeur3} onChange={(e)=>this.setState({valeur3 : e.target.value})}/>
                Age :<input type="number" min="0" value={this.state.valeur4} onChange={(e)=>this.setState({valeur4 : e.target.value})}/>
                Grade :<input type="number" min="0" value={this.state.valeur5} onChange={(e)=>this.setState({valeur5 : e.target.value})}/>
                Adresse :<input type="number" min="0" value={this.state.valeur6} onChange={(e)=>this.setState({valeur6 : e.target.value})}/>
                <button onClick={this.verif} type="button">Verifier</button>
            </form>
            
            </>

    
        )
    }



}
export default Employee;