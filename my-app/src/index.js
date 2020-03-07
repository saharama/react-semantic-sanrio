import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Menu, Image, Icon, Grid, List, Input } from 'semantic-ui-react';

const srcHelloKittyHead = 'https://cdn.clipart.email/51680a4ee672aedf5e1769c454975447_hello-kitty-hello-kitty-head-clipart-in-png-file-gifyu_2000-1424.png'
const srcSanrioLogo = 'https://sanrio-production-weblinc.netdna-ssl.com/assets/weblinc/store_front/logo_home-cecf45498400cb4ccb7edecdb351f23f9ede792068c0092aaac20fa818c61c93.png'
const srcSanrioShipping = 'https://www.sanrio.com/media/W1siZiIsIjIwMTkvMDYvMTIvMTYvNTIvMTIvOTcwL3hzYl9mcmVlX3NoaXBwaW5nXzIwMTgxMjE0YS5qcGciXV0/xsb_free-shipping_20181214a.jpg?sha=6dc5cb7f948f0476'
const srcVanity = 'https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDIvMjUvMTgvMzQvMTEvOTA0L0hQX0ltcHJlc3Npb25zVmFuaXR5XzAxMDcyMDIwXzAyLmpwZyJdLFsicCIsIm9wdGltIl1d/HP_ImpressionsVanity_01072020_02.jpg?sha=e257acfbcba196f5'
const srcSanrioJapangeles = 'https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDIvMjAvMTcvMzkvMTIvNDgwL0hQX2phcGFuZ2VsZXNfZ3VkZXRhbWFfY29sbGVjdGlvbl8wMjIxMjAyMC5qcGciXSxbInAiLCJvcHRpbSJdXQ/HP_japangeles_gudetama_collection_02212020.jpg?sha=b484487c4763eb39'

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topMenu">
          <Container>
            <Menu.Item><Image src={srcHelloKittyHead} size='mini' /></Menu.Item>
            <Menu.Item>Home</Menu.Item>
            <Menu.Item>Blog</Menu.Item>
            <Menu.Item>Hello Kitty Cafe</Menu.Item>
            <Menu.Item position="right">My Account</Menu.Item>
            <Menu.Item>Store Locator</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middleMenu">
          <Container>
            <Menu.Item><Image src={srcSanrioLogo} size='small' /></Menu.Item>
            <Menu.Item>New</Menu.Item>
            <Menu.Item>Featured</Menu.Item>
            <Menu.Item>Characters</Menu.Item>
            <Menu.Item>Apparel</Menu.Item>
            <Menu.Item>Bags</Menu.Item>
            <Menu.Item>Accessories</Menu.Item>
            <Menu.Item>Beauty</Menu.Item>
            <Menu.Item>Plush & Toys</Menu.Item>
            <Menu.Item>Stationery</Menu.Item>
            <Menu.Item>Home & Kitchen</Menu.Item>
            <Menu.Item>Kids</Menu.Item>
            <Menu.Item><Icon name='search' color='blue' /></Menu.Item>
            <Menu.Item fitted><Icon name='shopping bag' color='blue' /></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class FreeShipping extends React.Component {
  render() {
    return (
        <div>
          <Container className='shipping'>
            <Image src={srcSanrioShipping} />
          </Container>
        </div>
    );
  }
}

class Vanity extends React.Component {
  render() {
    return (
        <div>
          <Container className='vanity'>
            <Image src={srcVanity} />
          </Container>
        </div>
    );
  }
}

class SanrioJapangeles extends React.Component {
  render() {
    return (
        <div>
          <Container className='japangeles'>
            <Image src={srcSanrioJapangeles} />
          </Container>
        </div>
    );
  }
}

class StaffPicks extends React.Component {
  render() {
    return (
        <Container className = "staffPicks">
        <Grid centered>
          <Grid.Row>
            <h2>Shop Sanrio Staff Picks!</h2>
          </Grid.Row>
          <Grid.Row columns={6}>
            <Grid.Column>
              <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/sanrio-com-e-gift-card/5762254269702d6dfb002de4/detail.jpg'} size='small' />
              <h5>Sanrio Online Store e-Gift Card</h5>
              $25.00-$200.00
            </Grid.Column>
            <Grid.Column>
              <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/little-twin-stars-room-lamp/5dc34af573616e3d89000083/detail.jpg'} size='small' />
              <h5>Little Twin Stars Room Lamp</h5>
              $62.00
            </Grid.Column>
            <Grid.Column>
              <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/aggretsuko-plush-id-badge-holder/5d1babdb73616e7ad4000020/detail.jpg'} size='small' />
              <h5>Aggretsuko Plush ID Badge Holder</h5>
            </Grid.Column>
            <Grid.Column>
              <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/hello-kitty-24k-gold-ring/5c526f9073616e57250025cb/detail.jpg'} size='small' />
              <h5>Hello Kitty 24K Gold Ring</h5>
            </Grid.Column>
            <Grid.Column>
              <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/sailor-moon-x-my-melody-tote-bag-1/5af5da4d73616e48b2000d1d/detail.jpg'} size='small' />
              <h5>Sailor Moon x My Melody Tote Bag</h5>
            </Grid.Column>
            <Grid.Column>
              <Image src={'https://sanrio-production-weblinc.netdna-ssl.com/product_images/gudetama-handy-dandy-cream-peach-scented/5baeced973616e76ed000045/detail.jpg'} size='small' />
              <h5>The Creme Shop: Gudetama Handy Dandy Hand Cream</h5>
              $10.00
            </Grid.Column>
          </Grid.Row>
        </Grid>
        </Container>
    );
  }
}

class BraceletAd extends React.Component {
  render() {
    return(
        <Container className = "braceletAd">
          <Image src={"https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTkvMTIvMTcvMTMvMjIvNTcvNzMxLzEyMTQyMDE5X0hQX0xlYXRoZXJ0cmVhdHlfMTYwMHgzNTBfQmFubmVyXzIuanBnIl0sWyJwIiwib3B0aW0iXV0/12142019_HP_Leathertreaty_1600x350_Banner-2.jpg?sha=4e1e3ad298ceb90f"}/>
        </Container>
    )
  }
}

class LimitedEdition extends React.Component {
  render() {
    return(
      <Container className = "limitedEdition">
        <Grid centered columns={2}>
          <Grid.Column>
          <Image src={"https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDMvMDYvMjEvMDkvMTQvMzc4LzJ1cF9yZWNfZm90bV9tYXJjaF9jbl8wMzA5MjAyMF9jYWxlbmRhci5qcGciXSxbInAiLCJvcHRpbSJdXQ/2up-rec_fotm-march-cn_03092020_calendar.jpg?sha=58ce13a9822f2eb5"} />
          </Grid.Column>
          <Grid.Column>
            <Image src={"https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDMvMDYvMjEvMDkvMTQvMzc4LzJ1cF9yZWNfZm90bV9tYXJjaF9jbl8wMzA5MjAyMF9jYWxlbmRhci5qcGciXSxbInAiLCJvcHRpbSJdXQ/2up-rec_fotm-march-cn_03092020_calendar.jpg?sha=58ce13a9822f2eb5"} />
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

class SpotlightPochacco extends React.Component {
  render() {
    return (
        <div>
          <Container className="spotlightPochacco">
            <h1>IN THE SPOTLIGHT...</h1>
            <Grid verticalAlign="middle" columns={2}>
              <Grid.Column width={4}>
                <Image size='medium' src={"https://sanrio-production-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMjAvMDIvMjcvMjEvNTUvMzgvNTkyL1RodW1ibmFpbF83NDJfUGl4ZWxzLmpwZyJdLFsicCIsIm9wdGltIl1d/Thumbnail%20742%20Pixels.jpg?sha=7ec814859469840b"} />
              </Grid.Column>
              <Grid.Column width={9}>
                <h2>Pochacco Carrot Patch Cake</h2>
                Did you know Pochacco is a vegetarian? His favorite vegetables are carrots! So join this fun-loving pup and his pals for a delicious (early) birthday celebration with this Pochacco Carrot Patch Cake recipe. <br/>
                LEARN MORE<Icon fitted name="caret right" />
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    )

  }
}

class FooterMenu extends React.Component {

  render() {
    return (
        <div className='footerMenu'>
        <Container>
          <Grid centered columns={4}>
            <Grid.Column>
              <List>
                <List.Item><h3>World of Sanrio</h3></List.Item>
                <List.Item>About Sanrio</List.Item>
                <List.Item>Other Countries</List.Item>
                <List.Item>Business Opportunities</List.Item>
                <List.Item>Careers</List.Item>
                <List.Item>Press Releases</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item><h3>Need Help?</h3></List.Item>
                <List.Item>Customer Service</List.Item>
                <List.Item>FAQs</List.Item>
                <List.Item>CPSIA</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item><h3>Resources</h3></List.Item>
                <List.Item>Store Locator</List.Item>
                <List.Item>Children's Privacy Policy</List.Item>
                <List.Item>Privacy Policy</List.Item>
                <List.Item>Copyright Info</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List>
                <List.Item><h3>More</h3></List.Item>
                <List.Item>e-Gift Card</List.Item>
                <List.Item>Deals</List.Item>
                <List.Item>Sale</List.Item>
                <List.Item>Hello Kitty Cafe</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </Container>
        </div>
    );
  }
}

class BottomFooter extends React.Component {
  render() {
    return(
        <div className = "bottomBackground">
        <Container className="bottomContainer">
          <Grid>
            <Grid.Row>
              <h3>Sign up for Email</h3>
            </Grid.Row>
            <Grid.Row>
              Be the first to get the scoop on new releases, exclusive events, free gifts,<br/>
              shipping offers and more!
            </Grid.Row>
            <Grid.Row>
              <Input action={{
                content: 'Join',
                color: 'red',
              }}
                     placeholder="enter your email address"
              />
            </Grid.Row>
            <Grid.Row>
              <Icon inverted size='big' name='facebook f'/>
              <Icon inverted size='big' name='twitter'/>
              <Icon inverted size='big' name='instagram'/>
              <Icon inverted size='big' name='pinterest p'/>
              <Icon inverted size='big' name='youtube'/>
            </Grid.Row>
            <Grid.Row>
              © 2020 SANRIO CO., LTD. All Sanrio characters that appear on this website are protected<br/>
              Copy created by ICS314 S20
            </Grid.Row>
          </Grid>
        </Container>
        </div>
    )
  }
}

class Sanrio extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <FreeShipping/>
          <Vanity/>
          <SanrioJapangeles/>
          <StaffPicks/>
          <BraceletAd/>
          <LimitedEdition/>
          <SpotlightPochacco/>
          <FooterMenu/>
          <BottomFooter/>
        </div>
    );
  }
}

ReactDOM.render(<Sanrio/>, document.getElementById('root'));