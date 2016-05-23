import React from 'react';
import _ from 'lodash';
import ajax from 'superagent';
// import ChampSlider from './ChampSlider';
import TierColors from './../utils/TierColors';

const colors = {
  lolblue: 'rgb(173, 170, 252)',
  green: 'rgb(143, 230, 148)',
  red: 'rgb(176, 58, 22)'
};

const mainStyle = {
  fontFamily: 'Montserrat',
  display: 'inline-block',
  border: 'solid',
  margin: '15px'
};

const outCols = {
  position: 'relative',
  float: 'left',
  width: '70px',
  height: '70px',
  marginRight: '-15px !important'
};

const centerCol = {
  margin: '5px 15px',
  float: 'left',
  minWidth: '100px',
  padding: '0px'
};

class Stats extends React.Component {
  static propTypes = {
    styleData: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    const d = this.props.styleData;
    const customHeight = d.show_winrate || (!d.show_champion && !d.show_tier) ? '20px' : '30px';
    this.state = {
      visible: true,
      token: d.token,
      load_animation: d.load_animation,
      show_champion: d.show_champion,
      show_winrate: d.show_winrate,
      show_tier: d.show_tier,
      show_web: d.show_web,
      align: d.align,
      main: {
        backgroundColor: this.rgbaToString(d.back_color),
        borderColor: this.rgbaToString(d.back_border_color),
        borderWidth: `${d.back_border_width}px`,
        borderRadius: `${d.back_border_radius}px`,
        boxShadow: `${this.shadowToString(d.back_shadow)} ${this.rgbaToString(d.back_shadow_color)}`,
        textShadow: `${this.shadowToString(d.text_shadow)} ${this.rgbaToString(d.text_shadow_color)}`,
        ...mainStyle
      },
      summoner: {
        lineHeight: customHeight,
        height: customHeight,
        color: this.rgbaToString(d.text_color)
      },
      tier: {
        color: 'white',
        lineHeight: customHeight,
        height: customHeight,
      },
      mastery_icon: {
        boxShadow: `${this.shadowToString(d.champ_shadow)} ${this.rgbaToString(d.champ_shadow_color)}`,
        borderColor: this.rgbaToString(d.champ_border_color),
        borderWidth: `${d.champ_border_width}px`,
        borderRadius: `${d.champ_border_radius}%`
      },
      stats: {}
    };
    console.log('Initial State:', this.state);
    this.getStatsAjax = this.getStatsAjax.bind(this);
    this.rgbaToString = this.rgbaToString.bind(this);
  };

  getStatsAjax(){
    console.log('Getting Stats...');
    this.setState({ isLoading: true });
    console.log('Sending data...');
    ajax
    .post('http://localhost/test/public_html/actions/getstats.php')
    .send('token=' + this.state.token)
    .accept('json')
    .end((err, res) => {
      if (!err) {
        const _data = res.body;
        console.log('StatsData:', _data);
        if(!_data.error) {
          this.setState({
            visible: true,
            stats: _data.stats,
            tier: {
              lineHeight: this.state.tier.lineHeight,
              height: this.state.tier.height,
              color: (_.find(TierColors, (elem) => elem.tier === _data.stats.tier)).color
            }
          });
        } else {
          console.log('Error');
        }
      } else {
        console.log('Error');
      }
    });
  }
  componentWillReceiveProps(newProps) {
    this.setState({ ...newProps });
  }
  componentDidMount() {
    if (this.state.token !== 'NOTOKEN') {
      this.getStatsAjax();
      this.timer = setInterval(this.getStatsAjax, 60000);
    }
  }

  rgbaToString(color) {
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
  }

  shadowToString(shadow) {
    return `${shadow.h}px ${shadow.v}px ${shadow.b}px`;
  }

  render() {
    const percent = (this.state.stats.wins * 100 / (this.state.stats.wins + this.state.stats.losses)).toFixed(1);
    // const tiercolor = (_.find(TierColors, (elem) => elem.tier === this.state.stats.tier)).color;
    return (
      <div id='main' style={this.state.main} className={`animated ${this.state.load_animation}`}>
        {
          this.state.show_champion ?
            (
              <div style={ outCols }>
                image
              </div>
            ) : null
        }
        <div style={ centerCol }>
          <div className='summoner-container' style={{ textAlign: this.state.align }}>
            <div className='row' id='summoner-name' style={this.state.summoner}>{this.state.stats.name}</div>
            <div className='row' id='summoner-tier' style={this.state.tier}>
              {`${this.state.stats.tier} ${this.state.stats.division} ${this.state.stats.points}LP`}
            </div>
            {
              this.state.show_winrate ?
                (
                  <div className='row' id='summoner-winratio'>
                    <span style={{ color: percent < 50 ? colors.red : colors.green }}>{percent}%</span>{' - '}
                    <span style={{ color: colors.green }}>{this.state.stats.wins}W</span>{' / '}
                    <span style={{ color: colors.red }}>{this.state.stats.losses}L</span>
                  </div>
                ) : null
            }
          </div>
        </div>
        {
          this.state.show_tier ?
            (
              <div style={ outCols }>
                <div className='icon-container'>
                  <div id='tier-icon' style={{ backgroundImage: `url(./img/tiers/${this.state.stats.tier}.png)` }}></div>
                </div>
              </div>
            ) : null
        }
        {
          this.state.show_web ?
          (
            <div style={{ position: 'absolute', left: '20px', top: '90px', fontSize: '13px', color: 'grey' }}>
              {'http://www.lobobot.com'}
            </div>
          ) : null
        }
      </div>
    )
  };
}

export default Stats;
// <ChampSlider images={this.state.stats.champs} iconstyle={this.state.mastery_icon} />
