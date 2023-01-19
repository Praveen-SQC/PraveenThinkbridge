/// <reference types="cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject = {"key": "Tim", "key2": "Jones"}
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"]
        const exampleArrayOfObject =[{"key":"luke"}]

        let newArray = [{"key":"Praveen"},{"key":"Cookie"}]
        return newArray;
        newArray.push(exampleArrayOfObject)

        const users = {
            "firstName": "Joe",
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                }, 
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }

        cy.log(exampleObject["key"]); //Tim
        cy.log(exampleObject["key2"]); //Jones
        cy.log(exampleObject.key2) //Jones

        cy.log(exampleArrayOfValues[0]) //Sophie
        cy.log(exampleArrayOfValues[1]) //Rose

        cy.log(users.Students[0].lastName) //Blogs2
        cy.log(exampleArrayOfObject)
        cy.log()
    });
})