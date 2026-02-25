import type { GridColDef } from "@mui/x-data-grid";
import type { WeatherForecast } from "../types/WeatherForecast"
import { DataGrid } from "@mui/x-data-grid";

interface WeatherForecastProps {

    weatherForecasts: WeatherForecast[]
}

export const WeatherForecastGrid : React.FC<WeatherForecastProps> = ({weatherForecasts}) => 
    {
    const columns: GridColDef[] = [
    {
      field: 'date',
      headerName: 'Дата',
      width: 150,
      sortable: true,
    },
    {
      field: 'temperatureC',
      headerName: 'Темп. °C',
      width: 120,
      type: 'number',
    },
    {
      field: 'summary',
      headerName: 'Описание',
      width: 200,
      sortable: true,
    },
  ];

    return (
      <DataGrid
        rows={weatherForecasts}
        getRowId={(row) => `${row.date}-${row.temperatureC}`}
        columns={columns}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10]}
        disableRowSelectionOnClick
      />
  );
}