export interface Location {
  branch: string;
  pastors: string[];
  _createdAt: string;
  _id: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  title: string;
  contacts: string[];
  locationImg: {
    _type: string;
    asset: {
      _ref: string;
      _type: string;
    };
  };
}

export interface SliderItems {
  _createdAt: Date;
  _rev: string;
  _type: string;
  _id: string;
  title: string;
  _updatedAt: Date;
  mainImage: Image;
}

interface Image {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface OfficeProfile {
  _updatedAt: Date;
  _createdAt: Date;
  _rev: string;
  _type: string;
  description: string;
  _id: string;
  profileImage: Image;
  title: string;
}

interface Event {
  _updatedAt: Date;
  startDate: Date;
  endDate: Date;
  _createdAt: Date;
  _rev: string;
  _type: string; // Ensure type safety
  _id: string;
  title: string;
}

interface Gallery {
  _updatedAt: Date;
  image: Image;
  _createdAt: Date;
  _rev: string;
  _type: string; // Ensure type safety
  _id: string;
}

interface News {
  _updatedAt: Date;
  _createdAt: Date;
  _rev: string;
  _type: string;
  content: string;
  _id: string;
  coverImage: Image;
  title: string;
}
