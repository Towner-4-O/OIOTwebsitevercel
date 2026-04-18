import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  "x-access-token":
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YjViNmNhYjhlZjc3ZDI1ZGU0ZjhiZiIsImVtYWlsIjoia2Fqc3h1YW5zb2ltQGdtYWlsLmNvbSIsIm5hbWUiOiJqdW5haWQiLCJ0eXBlIjoicmlkZXIiLCJpYXQiOjE3NDAwMzE3OTcsImV4cCI6MTc0MDYzNjU5N30.gOng98658iOWwrNu6JCiaocFHAvgmuBp_N4dtADQwN8",
};

// find the service type & base fare details.
export async function fetchServiceBasicFare(body: any): Promise<any> {
  try {
    const response: any = await axios.post<any>(
      `https://api.nimmavahana.com/api/serviceBasicFare/daily`,
      body,
      { headers: headers }
    );
    return response.data;
  } catch (error: unknown | any) {
    alert(error.message);
  }
}

// calling api for fetch the estimation fare details.
export async function fetchEstimationFare(body: any): Promise<any> {
  try {
    const response: any = await axios.post<any>(
      `https://api.nimmavahana.com/api/estimationFare`,
      body,
      { headers: headers }
    );

    return response.data;
  } catch (error) {
    console.log("Error fetching serviceBasicFare:", error);
    throw error;
  }
}

// calling api for booking taxi request.
export async function bookTaxi(body: any): Promise<any> {
  try {
    const response: any = await axios.post<any>(
      `https://api.nimmavahana.com/api/requestTaxi`,
      body,
      { headers: headers }
    );

    return response.data;
  } catch (error) {
    console.log("Error fetching serviceBasicFare:", error);
    throw error;
  }
}

export async function getTripHistory(): Promise<any> {
  try {
    const response: any = await axios.post<any>(
      `https://api.nimmavahana.com/api/riderTripHistory`,
      {},
      { headers: headers }
    );
    return response.data;
  } catch (error) {
    console.log("Error fetching riderTripHistory:", error);
    throw error;
  }
}

export async function fetchRentalEstimation(body: any): Promise<any> {
  try {
    const response = await axios.post<any>(
      `https://api.nimmavahana.com/api/estimationFare/rental`,
      body,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching rental estimation:", error);
    throw error;
  }
}

interface RentalVehiclesResponse {
  success: boolean;
  vehicles: Array<{
    id: string;
    name: string;
    type: string;
    price: number;
    // Add other vehicle properties as needed
  }>;
}

export async function fetchRentalVehicles(body: {
  packageId: string;
  tripTypeCode: string;
  serviceId: string;
}): Promise<RentalVehiclesResponse> {
  try {
    const response = await axios.post<RentalVehiclesResponse>(
      `https://api.nimmavahana.com/api/rental/fareEstimation`,
      body,
      { headers }
    );

    if (!response.data.success) {
      throw new Error('Failed to fetch rental vehicles');
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching rental vehicles:", error);
    throw error;
  }
}

export async function fetchRentalPackages(body:any): Promise<any> {
  try {
    const response = await axios.post<any>(
      `https://api.nimmavahana.com/api/rental/packageList`,
      body,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching rental packages:", error);
    throw error;
  }
}

export async function fetchRentalFareEstimationSingle(body: {
  vehicleTypeId: string;
  packageId: string;
  tripTypeCode: string;
}): Promise<any> {
  try {
    const response = await axios.post(
      `https://api.nimmavahana.com/api/rental/fareEstimatioSingle`,
      body,
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching rental fare estimation:", error);
    throw error;
  }
}

export async function requestRentalTaxi(body: any): Promise<any> {
  try {
    const response = await axios.post<any>(
      `https://api.nimmavahana.com/api/requestRentalTaxi`,
     body,  
      { headers }
    );
    return response.data;
  } catch (error) {
    console.error("Error requesting rental taxi:", error);
    throw error;
  }
}

