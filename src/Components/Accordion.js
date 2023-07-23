import React from "react";

const Faq = ({ title, description, id, target }) => {
  return (
    <div className="mt-3 flex-column d-flex justify-content-center align-items-center ">
      <div id="accordionExample" class="accordion  w-65">
        <div class="card ">
          <div id={id} class="card-header bg-white ">
            <h6 class="mb-0 heading-5">
              <a
                href="/"
                data-toggle="collapse"
                data-target={`#${target}`}
                aria-expanded="true"
                aria-controls={target}
                class="d-block position-relative text-dark  collapsible-link py-2 px-5"
              >
                {title}
              </a>
            </h6>
          </div>
          <div
            id={target}
            aria-labelledby={id}
            data-parent="#accordionExample"
            class="collapse show"
          >
            <div class="card-body ">
              <p class="description">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
