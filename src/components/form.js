import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (

      <section className="u-clearfix u-white u-section-1" id="sec-99c6">
      <div className="u-clearfix u-expanded-width u-layout-wrap u-layout-wrap-1">
        <div className="u-layout">
          <div className="u-layout-col">
            <div className="u-size-40">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-palette-1-base u-size-28 u-layout-cell-1">
                  <div className="u-container-layout u-container-layout-1">
                    <div className="u-expand-resize u-image u-image-circle u-image-1" data-image-width={225} data-image-height={225} />
                    <p className="u-text u-text-1" data-animation-name="slideIn" data-animation-duration={1000} data-animation-delay={0} data-animation-direction="Down">Get Weather Condition Of Your City....</p>
                  </div>
                </div>
                <div className="u-container-style u-layout-cell u-palette-1-base u-right-cell u-size-32 u-layout-cell-2">
                  <div className="u-container-layout u-valign-middle u-container-layout-2">
                   

                      <div className="weather__info">
		{this.props.city && this.props.country && (
			<p className="weather__key">
				{' '}
				Location:
				<span className="weather__value">
					{' '}
					{this.props.city}, {this.props.country}
				</span>
			</p>
		)}
		{this.props.temperature && (
			<p className="weather__key">
				{' '}
				Temperature:
				<span className="weather__value"> {this.props.temperature}&#176;F </span>
			</p>
		)}
		{this.props.humidity && (
			<p className="weather__key">
				{' '}
				Humidity:
				<span className="weather__value"> {this.props.humidity}% </span>
			</p>
		)}
		{this.props.description && (
			<div>
				<p className="weather__key">
					{' '}
					Conditions:
					<span className="weather__value"> {this.props.description} </span>
				</p>
				<p className="graph-header">Range:</p>
			</div>
		)}
		{this.props.error && <p className="weather__error">{this.props.error}</p>}

		<div class="chart-container">
			<canvas id="myChart" />
		</div>
	</div>
</div>
                </div>
              </div>
            </div>
            <div className="u-size-20">
              <div className="u-layout-row">
                <div className="u-align-left u-container-style u-layout-cell u-left-cell u-palette-1-base u-size-60 u-layout-cell-3">
                  <div className="u-container-layout u-container-layout-3">
                    <div className="u-clearfix u-custom-html u-custom-html-1">
                      <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                   
                      <div className="container form-container">
                        <div className="row">
                          <div className="col-md-6 input-form-1">
                            <h3>Enter Your City and Country</h3>
                            <form onSubmit={this.props.getWeather}>
                              <div className="form-group">
                                <input type="text" className="form-control" id="city" placeholder="City"  />
                              </div>
                              <div className="form-group">
                                <input type="text" className="form-control" id="country" placeholder="Country"  />
                              </div>
                              <div className="form-group">
                                <input type="submit" className="btnSubmit"  />
                              </div>
                             
                            </form>
                          </div>
                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
};