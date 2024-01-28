import React from 'react'
import Button from 'components/Button';

type SaveType = {
    isMonthly: boolean
}

function Save({isMonthly}: SaveType) {
  return (
    <Button text={`Save current ${isMonthly ? 'month' : 'week'}`} />
  )
}

const MemoSave = React.memo(Save, (prevProps, nextProps) => {
  return prevProps.isMonthly === nextProps.isMonthly;
});

export default MemoSave

