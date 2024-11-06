import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import CropAverageTable from "./Components/CropAverageTable";
import CropMaxMinTable from "./Components/CropMaxMinTable";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <CropMaxMinTable />
      <CropAverageTable />
    </MantineProvider>
  );
}
