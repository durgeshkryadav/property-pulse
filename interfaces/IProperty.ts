export interface IRates {
    weekly: number;
    monthly: number;
    nightly: number;
  }
  export interface ISellerInfo {
    name: string;
    email: string;
    phone: string;
  }
  export interface ILocations {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  }
export interface IProperty {
      _id: string;
      owner: string;
      name: string;
      type: string;
      description: string;
      location: ILocations;
      beds: string;
      baths: string;
      square_feet: string;
      amenities: string[];
      rates: IRates;
      seller_info: ISellerInfo;
      images: string[];
      is_featured: boolean;
      createdAt: Date;
      updatedAt: Date;
  }