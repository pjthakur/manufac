// Define a type for the crop data used in the application
type CropData = {
  Country: string;
  Year: string;
  CropName: string;
  CropProduction: number;
  YieldOfCrops: number;
  AreaUnderCultivation: number;
};

// Define a type for the result of the maximum and minimum production calculation
type CalculateMaxMinProduction = {
  Year: string;
  MaxCrop: string;
  MinCrop: string;
};

// Function to calculate the crop with maximum and minimum production per year
export const calculateMaxMinProduction = (
  data: CropData[]
): CalculateMaxMinProduction[] => {
  const result: CalculateMaxMinProduction[] = [];

  // Group the data by year
  const groupedByYear = data.reduce((acc, item) => {
    const year = item.Year;
    if (!acc[year]) acc[year] = [];
    acc[year].push(item);
    return acc;
  }, {} as Record<string, CropData[]>);

  // Process each year to find the crop with maximum and minimum production
  for (const year in groupedByYear) {
    const crops = groupedByYear[year];
    const maxCrop = crops.reduce(
      (prev, current) =>
        prev.CropProduction > current.CropProduction ? prev : current,
      crops[0]
    );
    const minCrop = crops.reduce(
      (prev, current) =>
        prev.CropProduction < current.CropProduction ? prev : current,
      crops[0]
    );

    // Add the results to the result array
    result.push({
      Year: year,
      MaxCrop: maxCrop.CropName,
      MinCrop: minCrop.CropName,
    });
  }

  return result;
};

// Define a type for the result of the average yield and area calculation
type AverageYieldAndArea = {
  Crop: string;
  AverageYield: string;
  AverageArea: string;
};

// Function to calculate the average yield and cultivation area for each crop
export const calculateAverageYieldAndArea = (
  data: CropData[]
): AverageYieldAndArea[] => {
  const result: AverageYieldAndArea[] = [];

  // Group the data by crop name
  const groupedByCrop = data.reduce((acc, item) => {
    const crop = item.CropName;
    if (!acc[crop]) acc[crop] = { totalYield: 0, totalArea: 0, count: 0 };
    acc[crop].totalYield += item.YieldOfCrops;
    acc[crop].totalArea += item.AreaUnderCultivation;
    acc[crop].count += 1;
    return acc;
  }, {} as Record<string, { totalYield: number; totalArea: number; count: number }>);

  // Process each crop to calculate the average yield and area
  for (const crop in groupedByCrop) {
    const { totalYield, totalArea, count } = groupedByCrop[crop];
    result.push({
      Crop: crop,
      AverageYield: (totalYield / count).toFixed(3), // Average yield rounded to 3 decimal places
      AverageArea: (totalArea / count).toFixed(3), // Average area rounded to 3 decimal places
    });
  }

  return result;
};

