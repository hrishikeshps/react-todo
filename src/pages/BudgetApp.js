import React from 'react'
import { Stack, Button, Container } from "react-bootstrap"
import AddBudgetModal from '../components/AddBudgetModal'
import BudgetCard from '../components/BudgetCard'
import { useState } from 'react'

function BudgetApp() {
    const [showAddBudgetModal, setShowAddBudgetModal] = React.useState(false);

    return (
        <>  
            <Container className="my-4">
                BudgetApp
                <Stack direction='horizontal' gap="2" className="mb-4">
                    <h1 className="me-auto">Budgets</h1>
                    <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
                    <Button variant="outline-primary">Add Expense</Button>
                </Stack>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr)",
                        gap: "1rem",
                        alignItems: "flex-start"
                    }}>
                    <BudgetCard name="Entertainment" amount={780} max={500} gray ></BudgetCard>
                </div>
            </Container>
            <AddBudgetModal show={showAddBudgetModal} handleClose={() => {setShowAddBudgetModal(false)}}/>
        </>
        
    )
}


export default BudgetApp