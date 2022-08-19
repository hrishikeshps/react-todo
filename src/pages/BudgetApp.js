import React from 'react'
import { Stack, Button, Container } from "react-bootstrap"

function BudgetApp() {
    return (
        <Container className="my-4">
            BudgetApp
            <Stack direction='horizontal' gap="2" className="mb-4">
                <h1 className="me-auto">Budgets</h1>
                <Button variant="primary">Add Budget</Button>
                <Button variant="outline-primary">Add Expense</Button>
            </Stack>
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr)",
                    gap: "1rem",
                    alignItems: "flex-start"
                }}>
                <BudgetCard></BudgetCard>
            </div>
        </Container>
    )
}


export default BudgetApp