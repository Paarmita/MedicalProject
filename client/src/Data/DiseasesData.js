// https://www.benaroyaresearch.org/what-is-bri/disease-information
// https://www.cdc.gov/diseasesconditions/az/c.html
// import Diabetes from '../Images/Diseases/1.png';
// import MultipleSclerosis from '../Images/Diseases/2.png';
// import Colitis from '../Images/Diseases/3.png';
// import Lupus from '../Images/Diseases/4.png';
// import Arthritis from '../Images/Diseases/5.png';
// import Asthma from '../Images/Diseases/6.png';
// import Celiac from '../Images/Diseases/7.png';
// import Polychondritis from '../Images/Diseases/8.png';
// import Scleroderma from '../Images/Diseases/9.png';
// import Liver from '../Images/Diseases/10.png';
// import Infectious from '../Images/Diseases/11.png';
import Cancer from '../Images/Diseases/12.png';
// import Heart from '../Images/Diseases/13.png';

export const data = [
	{
		name: 'AIDS (Acquired Immune Deficiency Syndrome)',
		icon: Cancer,
	},
	{
		name: 'Arthritis',
		icon: Cancer,
		type: [
			{ title: { id: 21, name: 'Childhood Arthritis' } },
			{ title: { id: 22, name: 'Fibromyalgia' } },
			{ title: { id: 23, name: 'Gout' } },
			{ title: { id: 23, name: 'Osteoarthritis (OA)' } },
			{ title: { id: 23, name: 'Rheumatoid Arthritis (RA)' } },
		],
	},
	{
		name: 'Asthma',
		icon: Cancer,
	},
	{
		name: 'Eye, Ear, Nose and Throat',
		icon: Cancer,
		type: [
			{ title: { id: 41, name: 'Hearing Loss ' } },
			{ title: { id: 42, name: ' Glaucoma ' } },
			{ title: { id: 43, name: 'Macular Degeneration' } },
		],
	},
	{
		name: 'Digestive and Intestinal',
		icon: Cancer,
		type: [
			{ title: { id: 51, name: "Crohn's Disease" } },
			{ title: { id: 52, name: 'Ulcerative Colitis' } },
			{ title: { id: 53, name: 'IBS' } },
		],
	},
	{
		name: 'Cancer',
		icon: Cancer,
		type: [
			{ title: { id: 61, name: 'Breast' } },
			{ title: { id: 62, name: 'Lungs' } },
			{ title: { id: 63, name: 'Prostate' } },
			{ title: { id: 63, name: 'Skin' } },
			{ title: { id: 63, name: 'Blood' } },
		],
	},
	{
		name: 'Chicken Pox',
		icon: Cancer,
	},
	{
		name: 'Small Pox',
		icon: Cancer,
	},
];

export default data;
