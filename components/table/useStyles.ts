import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => {
    const commonBorderStyle = {
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: theme.colors.gray[3],
    }
    return {
        tableWrapper: {
            maxWidth: '100%',
            overflow: 'hidden',
            padding: '0 20px',
        },
        table: {
            borderSpacing: 0,
            width: 'fit-content',
            maxWidth: '100%',
            overflowY: 'hidden',
            overflowX: 'scroll',
            marginTop: theme.spacing.md,
            marginBottom: theme.spacing.md,
            borderRadius: theme.radius.md,
            display: 'block',
            borderStyle: 'solid',
            borderColor: theme.colors.gray[2],
        },
        cell: {
            ...commonBorderStyle,
            padding: `0.5rem ${theme.spacing.md}`,
            borderTop: `1px solid ${theme.colors.gray[2]}`,
            overflow: 'hidden',
            fontSize: '15px',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            fontWeight: 400,
        },
        headerCell: {
            ...commonBorderStyle,
            padding: `1rem ${theme.spacing.md}`,
            backgroundColor: theme.colors.gray[1],
            fontSize: '12px',
            textAlign: 'left',
            color: theme.colors.gray[6],
            // width: '100%',
            minWidth: '200px',
        },
        pagination: {
            textAlign: 'right',
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            justifyContent: 'end',
            alignItems: 'center',
        },
        paginationControls: {
            display: 'flex',
            flexDirection: 'row',
            gap: '5px',
        },
        paginationControlsButton: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '35px',
            height: '35px',
            borderRadius: theme.radius.sm,
            borderWidth: 1,
            borderColor: theme.colors.gray[2],
            ":disabled": {
                backgroundColor: theme.colors.gray[1],
                borderWidth: 0,
            }
        },
        paginationPaging:{
            fontSize: '12px',
            fontWeight: 600,
            color: theme.colors.gray[6]
        },
        paginationInput: {
            maxWidth: '50px',
            height: '35px',
            border: `1px solid ${theme.colors.gray[2]}`,
            textAlign: 'center',
            borderRadius: theme.radius.sm,
            ":disabled": {
                backgroundColor: theme.colors.gray[1],
                borderWidth: 0,
            }
        },
        actionButtons: {
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            gap: '5px',
            justifyContent:'end'
        },
        totalPage: {
            display: 'flex',
            alignItems: 'flex-end',
            gap: theme.spacing.sm
        }
    }
})