import React from "react";
import { Table } from "@mantine/core";
import { dataset } from "../data/dataset";
import { calculateMaxMinProduction } from "../utils/calculateProduction";
import "./tableStyles.css";

const CropMaxMinTable: React.FC = () => {
  const data = calculateMaxMinProduction(dataset);

  const rows = data.map((item, index) => (
    <Table.Tr key={index}>
      <Table.Td>{item.Year}</Table.Td>
      <Table.Td>{item.MaxCrop}</Table.Td>
      <Table.Td>{item.MinCrop}</Table.Td>
    </Table.Tr>
  ));

  return (
    <>
      <div className="tableHeading" >
      Crops with maximum and minimum production between the year 1950-2020
      </div>
      <Table
        striped
        highlightOnHover
        withTableBorder
        withColumnBorders
        verticalSpacing="sm"
      >
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Year</Table.Th>
            <Table.Th>Crop with Maximum Production in that Year</Table.Th>
            <Table.Th>Crop with Minimum Production in that Year</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </>
  );
};

export default CropMaxMinTable;
