import React from 'react'
import { Stack, Button, Container } from "react-bootstrap"
import { useBudgets } from '../context/BudgetsContext'
import BudgetCard from '../components/BudgetCard'
import AddBudgetModal from '../components/AddBudgetModal'
import AddExpenseModal from '../components/AddExpenseModal'
import UncategorizedBudgetCard from '../components/UncategorizedBudgetCard'

function BudgetApp() {
    const [showAddBudgetModal, setShowAddBudgetModal] = React.useState(false)
    const [showAddExpenseModal, setShowAddExpenseModal] = React.useState(false)
    const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = React.useState()

    const { budgets, getBudgetExpenses } = useBudgets()

    function openAddExpenseModal(budgetId) {
        setShowAddExpenseModal(true)
        setAddExpenseModalBudgetId(budgetId)
    }

    return (
        <>
            <Container className="my-4">
                <Stack direction='horizontal' gap="2" className="mb-4">
                    <h1 className="me-auto">Budgets</h1>
                    <Button variant="primary" onClick={() => setShowAddBudgetModal(true)}>Add Budget</Button>
                    <Button variant="outline-primary" onClick={openAddExpenseModal}>Add Expense</Button>
                </Stack>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill,minmax(300px, 1fr)",
                        gap: "1rem",
                        alignItems: "flex-start"
                    }}>
                    {budgets.map(budget => {
                        const amount = getBudgetExpenses(budget.id).reduce((total, expense) => total + expense.amount, 0)
                        return (
                            <BudgetCard
                                name={budget.name}
                                key={budget.id}
                                amount={amount}
                                max={budget.max}
                                onAddExpenseClick={() => openAddExpenseModal(budget.id)}
                            />
                        )

                    })}
                    <UncategorizedBudgetCard />

                </div>
            </Container>
            <AddBudgetModal
                show={showAddBudgetModal} 
                handleClose={() => { setShowAddBudgetModal(false) }} 
            />
            <AddExpenseModal 
                show={showAddExpenseModal} 
                defaultBudgetId={addExpenseModalBudgetId}
                handleClose={() => { setShowAddExpenseModal(false) }} 
                    
            />

        </>

    )
}


export default BudgetApp