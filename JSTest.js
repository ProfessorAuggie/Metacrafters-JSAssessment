/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(title, artist, year, medium) {
    // Creating an NFT object with provided metadata
    const newNFT = {
        title: title,
        artist: artist,
        year: year,
        medium: medium
    };
    // Adding the newly created NFT to the collection
    nftCollection.push(newNFT);
    console.log(`NFT Created: ${title}`);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs() {
    // Looping through the NFT collection and printing metadata
    for (let i = 0; i < nftCollection.length; i++) {
        console.log(`\nNFT #${i + 1}`);
        console.log(`Title: ${nftCollection[i].title}`);
        console.log(`Artist: ${nftCollection[i].artist}`);
        console.log(`Year: ${nftCollection[i].year}`);
        console.log(`Medium: ${nftCollection[i].medium}`);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log(`\nTotal NFTs Created: ${nftCollection.length}`);
}
// call your functions below this line

mintNFT("Sunset at Juhu Beach", "Vaibhav", 2020, "Acrylic on Canvas");
mintNFT("Mountain Bliss", "Haadi", 2018, "Watercolor on Paper");
mintNFT("City Lights", "Auggie", 2019, "Digital Art");

// Listing all minted NFTs
listNFTs();

// Printing the total supply of minted NFTs
getTotalSupply();
