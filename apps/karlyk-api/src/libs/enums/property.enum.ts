import { registerEnumType } from '@nestjs/graphql';

export enum PropertyType {
	SKIN_CARE = 'SKIN_CARE',
	HAIR_CARE = 'HAIR_CARE',
	MAKEUP = 'MAKEUP',
	PERFUME = 'PERFUME',
	PERSONAL_CARE = 'PERSONAL_CARE'
}
registerEnumType(PropertyType, {
	name: 'PropertyType',
});

export enum PropertyStatus {
	ACTIVE = 'ACTIVE',
	SOLD = 'SOLD',
	DELETE = 'DELETE',
}
registerEnumType(PropertyStatus, {
	name: 'PropertyStatus',
});

export enum PropertyLocation {
	KARLYK = 'Seoul. Miadong987-456',
	KARLYK1 = 'Seoul, Gangbuk-ku 168',
	KARLYK2 = 'Busan, Chungchangte-ro 244',
	KARLYK3 = 'Cheonan. Tongnamgo 168',
	KARLYK4 = 'Sokcho. Banghakro-23',
	KARLYK5 = 'Incheon, Dongilro 1345',
}
registerEnumType(PropertyLocation, {
	name: 'PropertyLocation',
});

export enum PropertySize {
	YUZ="100 ML/G",
	IKKIYUZ="200 ML/G",
	TURTYUZ="400 ML/G",
	BESHYUZ="500 ML/G",
	BESHYUZPLUS="500 plus ML/G",

}
registerEnumType(PropertySize, {
	name: 'PropertySize',
});

export enum PropertyVolume {
	ONE="1 pc",
	ONEPLUSONE="1+1",
}
registerEnumType(PropertyVolume, {
	name: 'PropertyVolume',
});

