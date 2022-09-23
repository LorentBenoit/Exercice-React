import React from "react";
class Salaire extends React.Component
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
    if(valeur2 < valeur1 * 1.1 && valeur3 < valeur1 * 0.2 && valeur4 < valeur1 * 0.35)
    alert("Correct");
    else
    alert("Incorrect");
    
    }
}
 verif= () => 
{
    let valeur1=this.state.valeur1;
    let valeur2=this.state.valeur2;
    let valeur3=this.state.valeur3;
    let valeur4=this.state.valeur4;
    let valeur5=this.state.valeur5;
if(valeur2 < valeur1 * 1.1 && valeur3 < valeur1 * 0.2 && valeur4 < valeur1 * 0.35)
alert("Correct");
else
alert("Incorrect");

}
    render()
    {
        return(
        
            <><h1>Salaire</h1><br />
            <form >
                Brut :<input type="number" min="0" value={this.state.valeur1} onChange={(e)=>this.setState({valeur1 : e.target.value})}/>
                Net :<input type="number" min="0" value={this.state.valeur2} onChange={(e)=>this.setState({valeur2 : e.target.value})}/>
                Taxe :<input type="number" min="0" value={this.state.valeur3} onChange={(e)=>this.setState({valeur3 : e.target.value})}/>
                Avance :<input type="number" min="0" value={this.state.valeur4} onChange={(e)=>this.setState({valeur4 : e.target.value})}/>
                Mois :<input type="number" min="0" value={this.state.valeur5} onChange={(e)=>this.setState({valeur5 : e.target.value})}/>
                <button onClick={this.verif} type="button">Verifier</button>
            </form>
            
            </>

    
        )
    }



}
export default Salaire;