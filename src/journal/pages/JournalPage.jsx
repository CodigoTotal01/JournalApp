import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
// compoennte para que el html lo reconosca 
// para que se considere como variant
export const JournalPage = () => {
  return (
    <JournalLayout>
          <Typography variant='h1'>JournalPage</Typography>
    </JournalLayout>
  )
}
