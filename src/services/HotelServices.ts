export type HotelProps = {
  name: string;
  rating: number;
  weekdays: {
    customerType: {
      regular: number;
      rewards: number;
    };
  };
  weekends: {
    customerType: {
      regular: number;
      rewards: number;
    };
  };
};

type WeekdaysProps = {
  customerType: {
    regular: number;
    rewards: number;
  };
};

type WeekendProps = {
  customerType: {
    regular: number;
    rewards: number;
  };
};

export class HotelServices {
  public name: string;
  public rating: number;
  public weekdays: WeekdaysProps;
  public weekends: WeekendProps;

  constructor({ name, rating, weekdays, weekends }: HotelProps) {
    this.name = name;
    this.rating = rating;
    this.weekdays = weekdays;
    this.weekends = weekends;
  }

  applyingBudget(customerType: string, days: string[]) {
    let budget = 0;

    days.forEach((day) => {
      if (day === "sun") {
        budget += this.weekends.customerType[customerType];
      } else if (day === "sat") {
        budget += this.weekends.customerType[customerType];
      } else {
        budget += this.weekdays.customerType[customerType];
      }
    });

    return budget;
  }
}
