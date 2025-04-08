import { Box } from "@/components/ui/box";
import { Table, TableHeader, TableBody, TableHead, TableRow, TableData } from "@/components/ui/table";
	
export function HomeScreen(){
    return (
         <Box className="p-3 bg-background- rounded-lg overflow-hidden">
      <Table className="w-full">
        <TableHeader>
          <TableRow className="border-b-0 bg-background-0 hover:bg-background-0">
            <TableHead className="font-bold">Order id</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Order price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b-0 bg-background-50">
            <TableData>5771</TableData>
            <TableData>3</TableData>
            <TableData>Rajesh Kumar</TableData>
            <TableData>New Jersey</TableData>
            <TableData>$ 200</TableData>
          </TableRow>
          <TableRow className="border-b-0 hover:bg-background-0">
            <TableData>5231</TableData>
            <TableData>2</TableData>
            <TableData>Priya Sharma</TableData>
            <TableData>Austin</TableData>
            <TableData>$ 150</TableData>
          </TableRow>
          <TableRow className="border-b-0 bg-background-50">
            <TableData>5771</TableData>
            <TableData>3</TableData>
            <TableData>Ravi Patel</TableData>
            <TableData>Seattle</TableData>
            <TableData>$ 215</TableData>
          </TableRow>
          <TableRow className="border-b-0 hover:bg-background-0">
            <TableData>5231</TableData>
            <TableData>4</TableData>
            <TableData>Ananya Gupta</TableData>
            <TableData>California</TableData>
            <TableData>$ 88</TableData>
           
          </TableRow>
          <TableRow className="border-b-0 bg-background-50">
            <TableData>5771</TableData>
            <TableData>3</TableData>
            <TableData>Arjun Singh</TableData>
            <TableData>Seattle</TableData>
            <TableData>$ 115</TableData>
          
          </TableRow>
          <TableRow className="border-b-0 bg-background-0 hover:bg-background-0">
            <TableData>5771</TableData>
            <TableData>3</TableData>
            <TableData>Nisha Verma</TableData>
            <TableData>Seattle</TableData>
            <TableData>$ 115</TableData>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
    )
}

export default HomeScreen
