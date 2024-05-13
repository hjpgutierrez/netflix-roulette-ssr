"use client";
import Link from "next/link";

export default function Dialog({ title, children }) {
  return (
    <div className="modal" style={{ display: "block" }} id="exampleModal">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{title}</h5>
            <Link href={`/dashboard`} className="btn-close"></Link>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}
