import React from 'react'
import { Card, ProgressBar, Stack, Button } from "react-bootstrap";
import { currencyFormatter } from '../utils';

function BudgetCard({ name, amount, max, gray, onAddExpenseClick }) {
    const classNames = [];
    if(amount > max){
        classNames.push("bg-danger", "bg-opacity-10")
    } 
    else if(gray) {
        classNames.push("bg-light")
    }

    return (
        <Card className={classNames.join(" ")}>
            <Card.Body>
                <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
                    <div className='me-2'>{name}</div>
                    <div className='d-flex align-items-baseline'>
                        {currencyFormatter.format(amount)}
                        {max && (<span className='text-muted fs-6 ms-1'> / {currencyFormatter.format(max)} </span>)}
                    </div>
                </Card.Title>
                {max && (<ProgressBar 
                    variant={getProgressVariant(amount, max)} 
                    // now={amount / max * 100} 
                    min={0}
                    max={max}
                    now={amount}
                />
                )}

                <Stack direction='horizontal' gap="2" className="mt-4">
                    <Button variant="outline-primary" className='ms-auto' onClick={onAddExpenseClick}>Add Expense</Button>
                    <Button variant="outline-secondary">Add Budget</Button>
                </Stack>
            </Card.Body>
        </Card>
    )
}

function getProgressVariant(amount, max) {
    const ratio = amount / max;
    if(ratio < .5) return "primary"
    if(ratio < .75) return "warning"
    return "danger"
}

export default BudgetCard