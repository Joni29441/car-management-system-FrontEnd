import { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



function VehicleList() {
  const [vehicles, setVehicles] = useState([]);

  const fetchData = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await fetch("https://localhost:7133/api/Vehicle", {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}`);
        return;
      }

      const text = await response.text();
      if (!text) {
        console.error('Received empty response');
        return;
      }

      const data = JSON.parse(text);
      setVehicles(data);
    } catch (error) {
      console.error('Error fetching vehicles:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <Grid container spacing={2}>
      {vehicles?.map(vehicle => (
        <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={vehicle.imageUrl || "/static/images/cards/contemplative-reptile.jpg"} // Replace with vehicle image
              title={`${vehicle.brand} ${vehicle.model}`}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {vehicle.brand} {vehicle.model}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Year: {vehicle.year}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Price: ${vehicle.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Status: {vehicle.status}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Buy</Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
export default VehicleList;
